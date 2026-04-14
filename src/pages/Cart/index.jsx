import { Item } from './Item.jsx';

export function Cart({ purchases }) {
  const createItem = ({ id, title, price, quantity, image }) => (
    <Item
      key={id}
      id={id}
      title={title}
      price={price}
      quantity={quantity}
      image={image}
    />
  );

  return (
    <>
      <h2>Cart</h2>
      <ul className="items">{purchases.map(createItem)}</ul>
    </>
  );
}
