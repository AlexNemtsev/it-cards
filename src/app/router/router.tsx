import { RouteObject, createBrowserRouter } from 'react-router-dom';

import { MainPage } from '@/pages/DecksPage';
import { LoginPage } from '@/pages/LoginPage';
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
