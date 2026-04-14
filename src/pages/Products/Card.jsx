import { useState } from 'react';
import { useOutletContext } from 'react-router';

import { ProductInfo } from '@/components/ProductInfo.jsx';
import { Button } from '@/components/ui/Button.jsx';

export function Card({ id, title, price, image }) {
  const [quantity, setQuantity] = useState(1);
  const [purchases, setPurchases] = useOutletContext();

  const handleQuantity = ({ target: { value } }) => setQuantity(value);

  function handlePurchase() {
    const purchase = {
      id,
      title,
      price,
      quantity: Number(quantity),
      image,
    };

    setPurchases([...purchases, purchase]);
  }

  return (
    <article id={id} className="card">
      <ProductInfo
        title={title}
        price={price}
        image={image}
        quantity={quantity}
        min={1}
        onChange={handleQuantity}
      />
      <Button onClick={handlePurchase}>Add to cart</Button>
    </article>
  );
}
