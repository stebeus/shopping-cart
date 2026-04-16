import { Field } from './ui/Field.jsx';

const formatPrice = (price) => `$${price.toFixed(2)}`;

export function ProductData({ title, price, image, quantity, min, onChange }) {
  return (
    <>
      <img src={image} alt="" width={100} height={100} />
      <h3>{title}</h3>
      <Field
        label="Quantity: "
        type="number"
        value={quantity}
        min={min}
        onChange={onChange}
      />
      <p>Price: {formatPrice(price)}</p>
      <p>Total: {formatPrice(price * quantity)}</p>
    </>
  );
}
