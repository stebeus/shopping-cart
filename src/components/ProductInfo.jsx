export function ProductInfo({
  title,
  price,
  image,
  defaultQuantity = 1,
  min = 1,
}) {
  return (
    <>
      <img src={image} alt="" width={100} height={100} />
      <h3>{title}</h3>
      <p className="price">$ {price}</p>
      <Field
        label="Quantity"
        type="number"
        defaultValue={defaultQuantity}
        min={min}
      />
    </>
  );
}
