import { Link, useOutletContext } from 'react-router';

import { Button } from '@/components/ui/button/index.jsx';
import { Item } from './Item.jsx';

import './index.css';

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
    <main id="cart-page">
      <h2>Cart</h2>
      {purchases.length === 0 ? (
        <>
          <p>Your cart is empty.</p>
          <Button>
            <Link to="/products">Fill your cart</Link>
          </Button>
        </>
      ) : (
        <ul className="items">{purchases.map(createItem)}</ul>
      )}
    </main>
  );
}
