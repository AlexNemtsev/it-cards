import { RouteObject, createBrowserRouter } from 'react-router-dom';

import { ForgotPassword } from '@/components/auth/ForgotPassword';
import { SignUpForm } from '@/components/auth/signUpForm';
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
  {
    element: <ForgotPassword />,
    path: Routes.FORGOTPASSWORD,
  },
  {
    element: <SignUpForm onSubmit={() => {}} />,
    path: Routes.SIGNUP,
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
