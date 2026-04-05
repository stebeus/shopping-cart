import { App } from './App.jsx';

export const BASE_URL = import.meta.env.BASE_URL;

export const routes = [
  {
    path: '/*',
    element: <App />,
  },
];
