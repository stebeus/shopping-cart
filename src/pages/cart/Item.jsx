import { X } from 'lucide-react';
import { useState } from 'react';
import { useOutletContext } from 'react-router';

import { ProductData } from '@/components/ProductData.jsx';
import { Button } from '@/components/ui/button/index.jsx';

export function Item({ id, title, price, quantity, image }) {
  const [newQuantity, setNewQuantity] = useState(quantity);
  const [purchases, setPurchases] = useOutletContext();

  function removePurchase(itemId) {
    const isNotPurchase = ({ id }) => id !== itemId;
    setPurchases(purchases.filter(isNotPurchase));
  }

  function handleQuantity({ target }) {
    const quantity = target.value;
    const itemId = target.closest('.item').id;

    if (quantity < 1) {
      removePurchase(itemId, purchases);
      return;
    }

    const isPurchase = ({ id }) => id === itemId;

    const purchase = purchases.find(isPurchase);
    const newPurchase = { ...purchase, quantity: Number(quantity) };

    const setNewPurchases = (purchase) =>
      purchase.id === itemId ? newPurchase : purchase;

    setNewQuantity(quantity);
    setPurchases(purchases.map(setNewPurchases));
  }

  function handleRemove({ target }) {
    const itemId = target.closest('.item').id;
    removePurchase(itemId, purchases);
  }

  return (
    <li id={id} className="item">
      <ProductData
        title={title}
        price={price}
        quantity={newQuantity}
        image={image}
        onChange={handleQuantity}
      />
      <Button onClick={handleRemove}>
        <X />
        Remove
      </Button>
    </li>
  );
}
