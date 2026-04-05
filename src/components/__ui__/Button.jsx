export function Button({ handler, children }) {
  return (
    <button type="button" onClick={handler}>
      {children}
    </button>
  );
}
