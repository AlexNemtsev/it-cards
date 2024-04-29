import { Navigate, Outlet } from 'react-router-dom';

import { Routes } from '@/shared/constants/routes';

export const PrivateRoutes = () => {
  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <Navigate to={Routes.LOGIN} />;
};
