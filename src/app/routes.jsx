import { ErrorFallback } from '@/components/ui/ErrorFallback.jsx';

import { Cart } from '@/pages/cart/index.jsx';
import { Home } from '@/pages/Home.jsx';
import { Products } from '@/pages/products/index.jsx';

import { App } from './App.jsx';

export const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorFallback />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'cart', element: <Cart /> },
    ],
  },
];
