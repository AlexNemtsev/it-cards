import { RouteObject, createBrowserRouter } from 'react-router-dom';

import { LoginPage } from '@/pages/LoginPage';
import { MainPage } from '@/pages/MainPage';
import { Routes } from '@/shared/constants/routes';
import { Layout } from '@/shared/ui/Layout';

import { PrivateRoutes } from './PrivateRoutes';

const publicRoutes: RouteObject[] = [
  {
    children: [{ element: <LoginPage />, path: Routes.LOGIN }],
    element: <Layout />,
  },
];

const privateRoutes: RouteObject[] = [
  {
    children: [{ element: <MainPage />, path: Routes.MAIN }],
    element: <Layout />,
  },
];

export const router = createBrowserRouter([
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
  ...publicRoutes,
]);
