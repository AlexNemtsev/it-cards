import { RouteObject, createBrowserRouter } from 'react-router-dom';

import { CheckEmail } from '@/components/auth/CheckEmail';
import { CreateNewPassword } from '@/components/auth/CreateNewPassword';
import { ForgotPasswordPage } from '@/pages/ForgotPasswordPage/ForgotPasswordPage';
import { LoginPage } from '@/pages/LoginPage';
import { MainPage } from '@/pages/MainPage';
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
        element: <CheckEmail />,
        path: Routes.CHECK_EMAIL,
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
  // {
  //   element: <ForgotPassword />,
  //   path: Routes.FORGOT_PASSWORD,
  // },
  // {
  //   element: <CreateNewPassword />,
  //   path: Routes.CHECK_EMAIL,
  // },
  // {
  //   element: <CheckEmail />,
  //   path: Routes.CHECK_EMAIL,
  // },
  // {
  //   element: <SignUpForm onSubmit={() => {}} />,
  //   path: Routes.SIGN_UP,
  // },
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
