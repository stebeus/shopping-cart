import { ProductInfo } from '@/components/ProductInfo.jsx';

export function Item({ id, title, price, quantity, image }) {
  return (
    <li id={id} className="item">
      <ProductInfo
        title={title}
        price={price}
        image={image}
        defaultQuantity={quantity}
        min={0}
      />
    </li>
  );
}
