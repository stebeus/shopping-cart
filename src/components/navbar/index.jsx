import { ShoppingCart } from 'lucide-react';
import { Link, NavLink } from 'react-router';

import './index.css';
import { Handbag } from 'lucide-react';

export function Navbar({ purchases }) {
  return (
    <header className="navbar">
      <h1 className="logo" title="Homepage">
        <Link to="/">
          <Handbag color="#341419" fill="#f2110f" /> Shopping Cart
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              <ShoppingCart /> Cart ({purchases})
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
