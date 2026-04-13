import { Link } from 'react-router';

export function Home() {
  return (
    <>
      <h2>Welcome!</h2>
      <p>Fill your cart with the best offers of the market.</p>
      <Link to="shop">Shop now</Link>
    </>
  );
}
