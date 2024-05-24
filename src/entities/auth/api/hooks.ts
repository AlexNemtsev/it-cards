import { useNavigate } from 'react-router-dom';

import { AccessTokenController } from '@/shared/api/accessTokenController';

import { authApi } from './auth';
import { LoginRequest } from './types';

const accessTokenController = new AccessTokenController();

const { useLoginMutation, useLogoutMutation } = authApi;

export const useLogout = () => {
  const [triggerLogout, logoutResult] = useLogoutMutation();
  const navigate = useNavigate();

  const logout = async () => {
    await triggerLogout();
    accessTokenController.removeToken();
    navigate(0);
  };

  return [logout, logoutResult] as const;
};

export const useLogin = () => {
  const [triggerLogin, loginResult] = useLoginMutation();
  const navigate = useNavigate();

  const login = async (data: LoginRequest) => {
    const { accessToken } = await triggerLogin(data).unwrap();

    accessTokenController.setToken(accessToken);
    navigate(0);
  };

  return [login, loginResult] as const;
};
