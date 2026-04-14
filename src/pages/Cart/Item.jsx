import { useState } from 'react';
import { useOutletContext } from 'react-router';

import { ProductInfo } from '@/components/ProductInfo.jsx';
import { Button } from '@/components/ui/Button.jsx';

export function Item({ id, title, price, quantity, image }) {
  const [newQuantity, setQuantity] = useState(quantity);
  const [purchases, setPurchases] = useOutletContext();

  function handleQuantity({ target }) {
    const newQuantity = target.value;
    const item = target.closest('.item');

    if (newQuantity < 1) {
      const isNotPurchase = ({ id }) => id !== item.id;
      setPurchases(purchases.filter(isNotPurchase));
      return;
    }

    const isPurchase = ({ id }) => id === item.id;

    const purchase = purchases.find(isPurchase);
    const newPurchase = { ...purchase, quantity: Number(newQuantity) };

    const setNewPurchases = (purchase) =>
      purchase.id === item.id ? newPurchase : purchase;

    setQuantity(newQuantity);
    setPurchases(purchases.map(setNewPurchases));
  }

  function handleRemove({ target }) {
    const item = target.closest('.item');
    const isNotPurchase = ({ id }) => id !== item.id;
    setPurchases(purchases.filter(isNotPurchase));
  }

  return (
    <li id={id} className="item">
      <ProductInfo
        title={title}
        price={price}
        quantity={newQuantity}
        image={image}
        onChange={handleQuantity}
      />
      <Button onClick={handleRemove}>Remove</Button>
    </li>
  );
}
