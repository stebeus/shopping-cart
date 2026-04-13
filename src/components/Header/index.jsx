import { Link } from 'react-router';

import './index.css';

export function Header({ purchases }) {
  return (
    <header>
      <h1 className="logo">
        <Link to="/">Shopping Cart</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="shop">Shop</Link>
          </li>
          <li>
            <Link to="cart">Cart ({purchases})</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
