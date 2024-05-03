import { RouteObject, createBrowserRouter } from 'react-router-dom';

import { ForgotPassword } from '@/components/auth/ForgotPassword';
import { LoginPage } from '@/pages/LoginPage';
import { MainPage } from '@/pages/MainPage';
import { Routes } from '@/shared/constants/routes';

import { PrivateRoutes } from './PrivateRoutes';

const publicRoutes: RouteObject[] = [
  {
    element: <LoginPage />,
    path: Routes.LOGIN,
  },
  {
    element: <ForgotPassword />,
    path: Routes.FORGOTPASSWORD,
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
