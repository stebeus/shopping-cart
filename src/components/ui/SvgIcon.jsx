export function SvgIcon({ id, title }) {
  return (
    <svg className="svgIcon" width={24} height={24}>
      <title>{title}</title>
      <use href={`icons.svg#${id}`}></use>
    </svg>
  );
}
