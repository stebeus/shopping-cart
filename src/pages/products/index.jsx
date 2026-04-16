import { ErrorFallback } from '@/components/ui/ErrorFallback.jsx';
import { Loader } from '@/components/ui/Loader.jsx';

import { useFetch } from '@/hooks/use-fetch.js';

import { Card } from './Card.jsx';

export function Products() {
  const apiUrl = 'https://fakestoreapi.com/products';
  const [products, isLoading, error] = useFetch(apiUrl);

  const createProduct = ({ id, title, price, image }) => (
    <Card key={id} title={title} price={price} image={image} />
  );

  if (isLoading) return <Loader />;
  if (error) return <ErrorFallback message={error} />;

  return (
    <>
      <h2>Products</h2>
      <div className="grid">{products.map(createProduct)}</div>
    </>
  );
}
