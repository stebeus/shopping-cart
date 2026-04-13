export function Item({ title, price, quantity, imgUrl }) {
  return (
    <li className="item">
      <img src={imgUrl} alt="" width={64} height={64} />
      <div className="info">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <label className="field">
          Quantity: <input type="number" defaultValue={quantity} />
        </label>
      </div>
    </li>
  );
}
