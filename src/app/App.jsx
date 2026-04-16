import { useState } from 'react';
import { Outlet } from 'react-router';

import { Footer } from '@/components/footer/index.jsx';
import { Navbar } from '@/components/navbar/index.jsx';

import './App.css';

const sumPurchases = (accumulator, { quantity }) => accumulator + quantity;

export function App() {
  const [purchases, setPurchases] = useState([]);

  return (
    <>
      <Navbar purchases={purchases.reduce(sumPurchases, 0)} />
      <Outlet context={[purchases, setPurchases]} />
      <Footer />
    </>
  );
}
