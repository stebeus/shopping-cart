import { Link, useRouteError } from 'react-router';

export function ErrorFallback({ message }) {
  const error = useRouteError();

  console.error(error);

  return (
    <>
      <h2>{error.status ?? 'Error'}</h2>
      <p>{error.statusText ?? error.message ?? message}</p>
      <Link to="/">Go back</Link>
    </>
  );
}
