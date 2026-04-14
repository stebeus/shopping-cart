import { Link, NavLink } from 'react-router';

export function Navbar({ purchases }) {
  return (
    <header className="navbar">
      <h1 className="logo">
        <Link to="/">Shopping Cart</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="products">Products</NavLink>
          </li>
          <li>
            <NavLink to="cart">Cart {purchases}</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
