import { ErrorMessage } from '@/components/ui/ErrorMessage.jsx';
import { useFetch } from '@/hooks/useFetch.js';
import { Card } from './Card.jsx';

export function Products() {
  const apiUrl = 'https://fakestoreapi.com/products';
  const [products, isLoading, error] = useFetch(apiUrl);

  const createProduct = ({ title, price, image }) => (
    <Card key={crypto.randomUUID()} title={title} price={price} image={image} />
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <ErrorMessage description={error} />;

  return (
    <>
      <h2>Products</h2>
      <div className="grid">{products.map(createProduct)}</div>
    </>
  );
}
