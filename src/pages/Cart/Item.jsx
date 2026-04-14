import { Button } from '@/components/ui/Button.jsx';

export function Item({ id, title, price, quantity, image }) {
  return (
    <li id={id} className="item">
      <img src={image} alt="" width={100} height={100} />
      <h3>{title}</h3>
      <p className="price">$ {price}</p>
      <p className="quantity">Purchased quantity: {quantity}</p>
      <Button>Remove</Button>
    </li>
  );
}
