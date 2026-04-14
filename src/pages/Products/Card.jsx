import { useState } from 'react';
import { useOutletContext } from 'react-router';

import { Button } from '@/components/ui/Button.jsx';
import { Field } from '@/components/ui/Field.jsx';

export function Card({ title, price, image }) {
  const [quantity, setQuantity] = useState(1);
  const [purchases, setPurchases] = useOutletContext();

  const handleQuantity = ({ target: { value } }) => setQuantity(value);

  function handlePurchase() {
    const purchase = { title, price, quantity: Number(quantity), image };
    setPurchases([...purchases, purchase]);
  }

  return (
    <article className="card">
      <img src={image} alt="" width={100} height={100} />
      <h3>{title}</h3>
      <p className="price">$ {price}</p>
      <Field
        label="Quantity"
        type="number"
        value={quantity}
        onChange={handleQuantity}
        min={1}
      />
      <Button onClick={handlePurchase}>Add to cart</Button>
    </article>
  );
}
