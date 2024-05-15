import { RouteObject, createBrowserRouter } from 'react-router-dom';

import { CreateNewPassword } from '@/components/auth/CreateNewPassword';
import { ForgotPasswordPage } from '@/pages/ForgotPasswordPage/ForgotPasswordPage';
import { LoginPage } from '@/pages/LoginPage';
import { MainPage } from '@/pages/MainPage';
import { Page404 } from '@/pages/Page404/Page404';
import { ProfilePage } from '@/pages/ProfilePage';
import { SignUpPage } from '@/pages/SignUpPage';
import { Routes } from '@/shared/constants/routes';
import { Layout } from '@/shared/ui/Layout';

import { PrivateRoutes } from './PrivateRoutes';

const publicRoutes: RouteObject[] = [
  {
    children: [
      {
        element: <LoginPage />,
        path: Routes.LOGIN,
      },
      {
        element: <ForgotPasswordPage />,
        path: Routes.FORGOT_PASSWORD,
      },
      {
        element: <CreateNewPassword />,
        path: Routes.CREATE_NEW_PASSWORD,
      },
      {
        element: <SignUpPage />,
        path: Routes.SIGN_UP,
      },
      {
        element: <ProfilePage />,
        path: Routes.PROFILE,
      },
    ],
    element: <Layout />,
    path: Routes.MAIN,
  },
];

const privateRoutes: RouteObject[] = [
  {
    children: [
      {
        element: <MainPage />,
        path: Routes.MAIN,
      },
      {
        element: <Page404 />,
        path: 'error',
      },
    ],
    element: <Layout />,
    errorElement: <Page404 />,
  },
];

export const router = createBrowserRouter([
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
    errorElement: <Page404 />,
  },
  ...publicRoutes,
]);
