import { Outlet } from 'react-router';

import { Footer } from './components/Footer/index.jsx';
import { Header } from './components/Header/index.jsx';

import './assets/App.css';

export function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
