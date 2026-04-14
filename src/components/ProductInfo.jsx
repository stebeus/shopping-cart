import { Field } from './ui/Field.jsx';

export function ProductInfo({ title, price, image, quantity, ...fieldProps }) {
  return (
    <>
      <img src={image} alt="" width={100} height={100} />
      <h3>{title}</h3>
      <p className="price">$ {price}</p>
      <Field label="Quantity" type="number" value={quantity} {...fieldProps} />
    </>
  );
}
