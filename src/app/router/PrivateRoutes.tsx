import { Navigate, Outlet } from 'react-router-dom';

import { useMeQuery } from '@/shared/api/auth/auth';
import { Routes } from '@/shared/constants/routes';

export const PrivateRoutes = () => {
  const { data, isLoading } = useMeQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return data ? <Outlet /> : <Navigate to={Routes.LOGIN} />;
};
