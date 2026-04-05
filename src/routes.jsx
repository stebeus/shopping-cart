import { App } from './App.jsx';
import { Cart } from './pages/Cart.jsx';
import { Home } from './pages/Home.jsx';
import { Shop } from './pages/Shop.jsx';

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'shop', element: <Shop /> },
      { path: 'cart', element: <Cart /> },
    ],
  },
];
