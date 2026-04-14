import { useState } from 'react';
import { Outlet } from 'react-router';

import { Footer } from './components/Footer/index.jsx';
import { Navbar } from './components/Navbar/index.jsx';

import './assets/App.css';

export function App() {
  const [purchases, setPurchases] = useState([]);

  const sumTotal = (accumulator, { quantity }) => accumulator + quantity;

  return (
    <>
      <Navbar purchases={purchases.reduce(sumTotal, 0)} />
      <main>
        <Outlet context={[purchases, setPurchases]} />
      </main>
      <Footer />
    </>
  );
}
