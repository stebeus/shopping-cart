import './index.css';

import { Card } from '@/pages/Shop/components/Card/index.jsx';

export function Products({ size = 10 }) {
  const createCard = () => (
    <Card key={crypto.randomUUID()} title="placeholder" price={123} />
  );

  const products = Array.from({ length: size }, createCard);

  return <div className="grid">{products}</div>;
}
