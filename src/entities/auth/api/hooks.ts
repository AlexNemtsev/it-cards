import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AccessTokenController } from '@/shared/api/accessTokenController';
import { flashcardsApi } from '@/shared/api/flashcardsApi';
import { Routes } from '@/shared/constants/routes';
import { errorNotification } from '@/shared/lib/notifications';

import { authApi } from './auth';
import { BaseErrorResponse, LoginRequest } from './types';

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
    try {
      const { accessToken } = await triggerLogin(data).unwrap();

      accessTokenController.setToken(accessToken);
      dispatch(flashcardsApi.internalActions.resetApiState());
    } catch (e) {
      const error = e as BaseErrorResponse;

      errorNotification(error.data.message || 'Some error occurred');
    }
  };

  return [login, loginResult] as const;
};
