import { NavLink } from 'react-router';

export function Home() {
  return (
    <>
      <h2>Welcome!</h2>
      <p>Fill your cart with the best offers of the market.</p>
      <NavLink to="products">Shop now</NavLink>
    </>
  );
}
