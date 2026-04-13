import { Button } from '@/components/ui/Button.jsx';
import { ProductInfo } from '@/components/ui/ProductInfo.jsx';

export function Card({ title, price, imgUrl }) {
  return (
    <article className="card">
      <img src={imgUrl} alt="" width={160} height={160} />
      <ProductInfo title={title} price={price} defaultQuantity={1} min={1} />
      <Button>Add to cart</Button>
    </article>
  );
}
