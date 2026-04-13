export function SvgIcon({ id, alt }) {
  return (
    <svg className="icon" width="24" height="24">
      <title>{alt}</title>
      <use href={`icons.svg#${id}`}></use>
    </svg>
  );
}
