import { useState } from 'react';

import { ProductInfo } from '@/components/ProductInfo.jsx';
import { Button } from '@/components/ui/Button.jsx';

export function Card({ id, title, price, image }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = ({ target: { value } }) => setQuantity(value);

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
      <Button>Add to cart</Button>
    </article>
  );
}
