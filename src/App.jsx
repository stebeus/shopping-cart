import { Outlet } from 'react-router';

import './assets/App.css';

import { Footer } from './components/Footer/index.jsx';
import { Header } from './components/Header/index.jsx';

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
