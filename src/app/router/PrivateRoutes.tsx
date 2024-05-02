import { Navigate, Outlet } from 'react-router-dom';

import { Routes } from '@/shared/constants/routes';

export const PrivateRoutes = () => {
  const isAuthenticated = false;

  return isAuthenticated ? <Outlet /> : <Navigate to={Routes.LOGIN} />;
};
