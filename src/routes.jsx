import { App } from './App.jsx';
import { Home } from './pages/Home.jsx';

export const routes = [
  {
    path: '/*',
    element: <App />,
    children: [{ index: true, element: <Home /> }],
  },
];
