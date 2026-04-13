import { App } from './App.jsx';

import { Cart } from './pages/Cart/index.jsx';
import { ErrorPage } from './pages/ErrorPage.jsx';
import { Home } from './pages/Home.jsx';
import { Products } from './pages/Products/index.jsx';

export const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'cart', element: <Cart /> },
    ],
  },
];
