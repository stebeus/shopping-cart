import { Link } from 'react-router';

import './index.css';

export function Header() {
  return (
    <header>
      <h1 className="logo">
        <Link to="/">Shopping cart</Link>
      </h1>
    </header>
  );
}
