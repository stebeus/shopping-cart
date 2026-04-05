import { Link } from 'react-router';

import './index.css';

import { BASE_URL } from '@/routes.jsx';

export function Header() {
  return (
    <header>
      <h1 className="logo">
        <Link to={BASE_URL}>Shopping cart</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to={BASE_URL}>Home</Link>
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
