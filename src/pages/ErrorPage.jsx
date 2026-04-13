import { Link, useRouteError } from 'react-router';

import { ErrorMessage } from '@/components/ui/ErrorMessage.jsx';

export function ErrorPage() {
  const error = useRouteError();

  console.error(error);

  return (
    <>
      <ErrorMessage
        title={error.status}
        description={error.statusText ?? error.message}
      />
      <Link to="/">Return to home</Link>
    </>
  );
}
