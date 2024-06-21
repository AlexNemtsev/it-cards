import { Navigate, RouteObject, createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/app/Layout';
import { CreateNewPasswordPage } from '@/pages/CreateNewPasswordPage';
import { DeckPage } from '@/pages/DeckPage';
import { DecksPage } from '@/pages/DecksPage';
import { ForgotPasswordPage } from '@/pages/ForgotPasswordPage/ForgotPasswordPage';
import { LoginPage } from '@/pages/LoginPage';
import { Page404 } from '@/pages/Page404';
import { ProfilePage } from '@/pages/ProfilePage';
import { SignUpPage } from '@/pages/SignUpPage';
import { Routes } from '@/shared/constants/routes';

import { Layout } from '../Layout/Layout';
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
        element: <CreateNewPasswordPage />,
        path: Routes.CREATE_NEW_PASSWORD,
      },
      {
        element: <SignUpPage />,
        path: Routes.SIGN_UP,
      },
    ],
    element: <Layout />,
  },
];

const privateRoutes: RouteObject[] = [
  {
    children: [
      { element: <Navigate to={Routes.DECKS} />, index: true },
      { element: <DecksPage />, path: Routes.DECKS },
      { element: <ProfilePage />, path: Routes.PROFILE },
      { element: <Page404 />, errorElement: <Page404 />, path: '*' },
      { element: <DeckPage />, path: `${Routes.DECKS}/:${Routes.DECK_ID}` },
    ],
    element: <Layout />,
    path: '/',
  },
];

export const router = createBrowserRouter([
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
  ...publicRoutes,
]);
