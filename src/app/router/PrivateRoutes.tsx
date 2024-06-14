import { Navigate, Outlet } from 'react-router-dom';

import { useMeQuery } from '@/entities/user/api';
import { Routes } from '@/shared/constants/routes';
import { Spinner } from '@/shared/ui/Spinner';

export const PrivateRoutes = () => {
  const { isLoading, isSuccess } = useMeQuery();

  if (isLoading) {
    return <Spinner />;
  }

  return isSuccess ? <Outlet /> : <Navigate to={Routes.LOGIN} />;
};
