import { NavLink, useOutletContext } from 'react-router';

import { Item } from './Item.jsx';

function EmptyCard() {
  return (
    <>
      <p>Your cart is empty</p>
      <NavLink to="/products">Purchase products</NavLink>
    </>
  );
}

export function Cart() {
  const [purchases] = useOutletContext();

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
      <ul className="items">
        {purchases.length === 0 ? <EmptyCard /> : purchases.map(createItem)}
      </ul>
    </>
  );
}
