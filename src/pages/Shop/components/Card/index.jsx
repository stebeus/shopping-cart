import './index.css';

import { Button } from '@/components/__ui__/Button.jsx';

function Card({ title, price, imgUrl }) {
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

export const createCard = ({ id, title, price, image }) => (
  <Card key={id} title={title} price={price} imgUrl={image} />
);
