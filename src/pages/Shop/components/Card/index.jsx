import './index.css';

import { Button } from '@/components/__ui__/Button.jsx';

export function Card({ title, price, imgId }) {
  const imgUrl = `https://i.imgur.com/${imgId}.jpeg`;

  return (
    <article className="card">
      <img src={imgUrl} alt="" width={100} height={100} />
      <h3>{title}</h3>
      <p className="price">${price}</p>
      <label className="field">
        Quantity:
        <input type="number" min={1} defaultValue={1} />
      </label>
      <Button>Add to cart</Button>
    </article>
  );
}
