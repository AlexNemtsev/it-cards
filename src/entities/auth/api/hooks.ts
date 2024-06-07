import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AccessTokenController } from '@/shared/api/accessTokenController';
import { flashcardsApi } from '@/shared/api/flashcardsApi';
import { Routes } from '@/shared/constants/routes';

import { authApi } from './auth';
import { LoginRequest } from './types';

const accessTokenController = new AccessTokenController();

const { useLoginMutation, useLogoutMutation } = authApi;

export const useLogout = () => {
  const [triggerLogout, logoutResult] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = async () => {
    await triggerLogout();
    accessTokenController.removeToken();
    dispatch(flashcardsApi.internalActions.resetApiState());
    navigate(Routes.LOGIN);
  };

  return [logout, logoutResult] as const;
};

export const useLogin = () => {
  const [triggerLogin, loginResult] = useLoginMutation();
  const dispatch = useDispatch();

  const login = async (data: LoginRequest) => {
    const { accessToken } = await triggerLogin(data).unwrap();

    accessTokenController.setToken(accessToken);
    dispatch(flashcardsApi.internalActions.resetApiState());
  };

  return [login, loginResult] as const;
};
