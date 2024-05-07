import { RouteObject, createBrowserRouter } from 'react-router-dom';

import { MainPage } from '@/pages/DecksPage';
import { LoginPage } from '@/pages/LoginPage';
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
