import { ProductInfo } from '@/components/ProductInfo.jsx';

export function Item({ id, title, price, quantity, image }) {
  return (
    <li id={id} className="item">
      <ProductInfo
        title={title}
        price={price}
        quantity={quantity}
        image={image}
        onChange={handleQuantity}
      />
    </li>
  );
}
