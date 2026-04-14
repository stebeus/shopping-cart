export function Item({ title, price, quantity, image }) {
  return (
    <li className="item">
      <img src={image} alt="" width={100} height={100} />
      <h3>{title}</h3>
      <p className="price">$ {price}</p>
      <p className="quantity">Purchased quantity: {quantity}</p>
    </li>
  );
}
