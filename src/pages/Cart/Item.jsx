import { useOutletContext } from 'react-router';

import { ProductInfo } from '@/components/ProductInfo.jsx';
import { Button } from '@/components/ui/Button.jsx';

export function Item({ id, title, price, quantity, image }) {
  const [purchases, setPurchases] = useOutletContext();

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
        quantity={quantity}
        image={image}
      />
      <Button onClick={handleRemove}>Remove</Button>
    </li>
  );
}
