import { Link, useRouteError } from 'react-router';

export function ErrorPage() {
  const error = useRouteError();

  console.error(error);

  return (
    <>
      <h2>{error.status ?? 'Error!'}</h2>
      <p>{error.statusText ?? error.message}</p>
      <Link to="/">Return to home</Link>
    </>
  );
}
