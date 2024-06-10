import { RouteObject, createBrowserRouter } from 'react-router-dom';

import { CreateNewPassword } from '@/components/auth/CreateNewPassword';
import { DecksPage } from '@/pages/DecksPage';
import { ForgotPasswordPage } from '@/pages/ForgotPasswordPage/ForgotPasswordPage';
import { LoginPage } from '@/pages/LoginPage';
import { Page404 } from '@/pages/Page404';
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
    path: Routes.DECKS,
  },
];

const privateRoutes: RouteObject[] = [
  {
    children: [
      { element: <DecksPage />, path: Routes.DECKS },
      {
        element: <Page404 />,
        errorElement: <Page404 />,
        path: '*',
      },
    ],
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
