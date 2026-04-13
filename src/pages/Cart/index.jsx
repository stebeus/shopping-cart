import { Item } from './Item.jsx';

export function Cart({ items }) {
  const createItem = ({ id, title, price, quantity, image }) => (
    <Item
      key={id}
      title={title}
      price={price}
      quantity={quantity}
      imgUrl={image}
    />
  );

  return (
    <>
      <h2>Cart</h2>
      <ul className="products">{items.map(createItem)}</ul>
    </>
  );
}
