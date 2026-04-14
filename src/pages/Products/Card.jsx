import { ProductInfo } from '@/components/ProductInfo.jsx';
import { Button } from '@/components/ui/Button.jsx';

export function Card({ id, title, price, image }) {
  return (
    <article id={id} className="card">
      <ProductInfo title={title} price={price} image={image} />
      <Button>Add to cart</Button>
    </article>
  );
}
