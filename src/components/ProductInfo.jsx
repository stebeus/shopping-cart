import { Field } from './ui/Field.jsx';

export function ProductInfo({
  title,
  price,
  image,
  quantity,
  onChange,
  min = 0,
}) {
  return (
    <>
      <img src={image} alt="" width={100} height={100} />
      <h3>{title}</h3>
      <p className="price">$ {price}</p>
      <Field
        label="Quantity"
        type="number"
        value={quantity}
        onChange={onChange}
        min={min}
      />
    </>
  );
}
