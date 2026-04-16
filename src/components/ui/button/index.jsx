import './index.css';

export function Button({ type = 'button', onClick, children }) {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
}
