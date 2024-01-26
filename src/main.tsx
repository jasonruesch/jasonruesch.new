import { Home, Home2, Home3, Home4, Home5 } from '@jasonruesch/ui';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import App from './app/app';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home5 />,
      },
      {
        path: 'home-2',
        element: <Home2 />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'home-4',
        element: <Home4 />,
      },
      {
        path: 'home-3',
        element: <Home3 />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
