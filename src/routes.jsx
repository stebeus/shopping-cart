import { App } from './App.jsx';
import { Home } from './pages/Home.jsx';

const BASE_URL = import.meta.env.BASE_URL;

export const routes = [
  {
    path: BASE_URL,
    element: <App />,
    children: [{ index: true, element: <Home /> }],
  },
];
