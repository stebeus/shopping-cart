import { ProductInfo } from '@/components/ui/ProductInfo.jsx';

export function Item({ title, price, quantity, imgUrl }) {
  return (
    <li className="item">
      <img src={imgUrl} alt="" width={64} height={64} />
      <div className="info">
        <ProductInfo title={title} price={price} defaultQuantity={quantity} />
      </div>
    </li>
  );
}
