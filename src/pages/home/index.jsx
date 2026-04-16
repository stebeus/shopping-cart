import { NavLink } from 'react-router';

import { Button } from '@/components/ui/button/index.jsx';

import './index.css';

export function Home() {
  return (
    <main id="home">
      <h2>Welcome!</h2>
      <p>Fill your cart with the best offers of the market.</p>
      <Button>
        <NavLink to="products">Shop now</NavLink>
      </Button>
    </main>
  );
}
