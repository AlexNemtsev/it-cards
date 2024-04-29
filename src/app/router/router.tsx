import { RouteObject, createBrowserRouter } from 'react-router-dom';

import { Routes } from '@/shared/constants/routes';

import { PrivateRoutes } from './PrivateRoutes';

const publicRoutes: RouteObject[] = [
  {
    element: <div>login</div>,
    path: Routes.LOGIN,
  },
];

const privateRoutes: RouteObject[] = [
  {
    element: <div>hello</div>,
    path: Routes.MAIN,
  },
];

export const router = createBrowserRouter([
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
  ...publicRoutes,
]);
