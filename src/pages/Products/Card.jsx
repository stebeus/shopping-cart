import { useState } from 'react';
import { useOutletContext } from 'react-router';

import { ProductInfo } from '@/components/ProductInfo.jsx';
import { Button } from '@/components/ui/Button.jsx';

export function Card({ title, price, image }) {
  const [quantity, setQuantity] = useState(1);
  const [purchases, setPurchases] = useOutletContext();

  const handleQuantity = ({ target: { value } }) => setQuantity(value);

  function handlePurchase() {
    const purchase = {
      id: crypto.randomUUID(),
      title,
      price,
      quantity: Number(quantity),
      image,
    };

    setPurchases([...purchases, purchase]);
  }

  return (
    <article className="card">
      <ProductInfo
        title={title}
        price={price}
        quantity={quantity}
        image={image}
        onChange={handleQuantity}
        min={1}
      />
      <Button onClick={handlePurchase}>Add to cart</Button>
    </article>
  );
}
