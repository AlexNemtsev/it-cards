import { Navigate, RouteObject, createBrowserRouter } from 'react-router-dom';

import { DeckPage } from '@/pages/DeckPage';
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
    children: [
      { element: <Navigate to={Routes.DECKS} />, path: Routes.MAIN },
      { element: <MainPage />, path: Routes.DECKS },
      { element: <DeckPage />, path: `${Routes.DECKS}/:${Routes.DECK_ID}` },
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
