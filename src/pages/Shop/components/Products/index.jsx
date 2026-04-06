import './index.css';

import { useFetch } from '@/hooks/useFetch.js';
import { createCard } from '@/pages/Shop/components/Card/index.jsx';

export function Products() {
  const apiUrl = 'https://fakestoreapi.com/products';
  const [products, isLoading, error] = useFetch(apiUrl);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return <div className="grid">{products.map(createCard)}</div>;
}
