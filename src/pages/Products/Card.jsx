import { Button } from '@/components/ui/Button.jsx';

export function Card({ title, price, imgUrl }) {
  return (
    <article className="card">
      <img src={imgUrl} alt="" width={160} height={160} />
      <h3>{title}</h3>
      <p className="price">${price}</p>
      <label className="field">
        Quantity: <input type="number" defaultValue={1} min={1} />
      </label>
      <Button>Add to cart</Button>
    </article>
  );
}
