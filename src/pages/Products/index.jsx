import { ErrorMessage } from '@/components/ui/ErrorMessage.jsx';
import { useFetch } from '@/hooks/useFetch.js';
import { Card } from './Card.jsx';

export function Products() {
  const api = 'https://fakestoreapi.com/products';
  const [products, isLoading, error] = useFetch(api);

  const createCard = ({ id, title, price, image }) => (
    <Card key={id} title={title} price={price} imgUrl={image} />
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <ErrorMessage description={error} />;

  return (
    <>
      <h2>Products</h2>
      <div className="grid">{products.map(createCard)}</div>
    </>
  );
}
