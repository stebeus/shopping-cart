export function ErrorMessage({ title = 'Error', description }) {
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
    </>
  );
}
