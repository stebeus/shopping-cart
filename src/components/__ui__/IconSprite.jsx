export function IconSprite({ id, alt }) {
  const url = `icons.svg#${id}`;

  return (
    <svg
      className="icon"
      role="img"
      aria-label={alt}
      width={24}
      height={24}
      fill="currentColor"
    >
      <use href={url}></use>
    </svg>
  );
}
