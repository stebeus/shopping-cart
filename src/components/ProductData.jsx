import { Field } from './ui/field/index.jsx';

const formatPrice = (price) => `$${price.toFixed(2)}`;

export function ProductData({ title, price, image, quantity, min, onChange }) {
  return (
    <div className="product-data">
      <div className="img-wrapper">
        <img src={image} alt="" width={100} height={100} />
      </div>
      <h3>{title}</h3>
      <Field
        label="Quantity: "
        type="number"
        value={quantity}
        min={min}
        onChange={onChange}
      />
      <p>
        Price: <span className="price">{formatPrice(price)}</span>
      </p>
      <p>
        Total: <span className="price">{formatPrice(price * quantity)}</span>
      </p>
    </div>
  );
}
