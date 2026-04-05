import { Link } from 'react-router';

import { Button } from '@/components/__ui__/Button.jsx';

export function Home() {
  return (
    <>
      <h2>Welcome to the Shopping cart</h2>
      <p>Enjoy filling your cart with the best offers of the entire market!</p>
      <Button>
        <Link to="shop">Shop now</Link>
      </Button>
    </>
  );
}
