import { RouteObject, createBrowserRouter } from 'react-router-dom';

import { LoginPage } from '@/pages/LoginPage';
import { MainPage } from '@/pages/MainPage';
import { Routes } from '@/shared/constants/routes';

import { PrivateRoutes } from './PrivateRoutes';

const publicRoutes: RouteObject[] = [
  {
    element: <LoginPage />,
    path: Routes.LOGIN,
  },
];

const privateRoutes: RouteObject[] = [
  {
    element: <MainPage />,
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
