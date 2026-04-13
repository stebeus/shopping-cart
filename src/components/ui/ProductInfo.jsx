export function ProductInfo({ title, price, defaultQuantity = 1, min = 0 }) {
  return (
    <>
      <h3> {title}</h3>
      <p className="price">${price}</p>
      <label className="field">
        Quantity:{' '}
        <input type="number" defaultValue={defaultQuantity} min={min} />
      </label>
    </>
  );
}
