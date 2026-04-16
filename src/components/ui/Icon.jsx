export function Icon({ id, title }) {
  return (
    <svg className="icon" width={24} height={24} fill="currentColor">
      <title>{title}</title>
      <use href={`/icons.svg#${id}-icon`}></use>
    </svg>
  );
}
