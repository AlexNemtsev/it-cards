import { Navigate, Outlet } from 'react-router-dom';

import { useMeQuery } from '@/entities/user/api';
import { Routes } from '@/shared/constants/routes';

export const PrivateRoutes = () => {
  const { isLoading, isSuccess } = useMeQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return isSuccess ? <Outlet /> : <Navigate to={Routes.LOGIN} />;
};
