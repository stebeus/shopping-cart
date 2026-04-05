import { Link } from 'react-router';

import './index.css';

export function Header() {
  return (
    <header>
      <h1 className="logo">
        <Link to="/">Shopping cart</Link>
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
            <Link to="cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
