import { Button } from '@/components/ui/Button.jsx';
import { Field } from '@/components/ui/Field.jsx';

export function Card({ id, title, price, image }) {
  function handlePurchase() {}

  return (
    <article id={id} className="card">
      <img src={image} alt="" width={100} height={100} />
      <h3>{title}</h3>
      <p className="price">$ {price}</p>
      <Field label="Quantity" type="number" defaultValue={1} min={1} />
      <Button onClick={handlePurchase}>Add to cart</Button>
    </article>
  );
}
