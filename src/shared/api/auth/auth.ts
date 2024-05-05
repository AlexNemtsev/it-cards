import {
  LoginRequest,
  LoginResponse,
  MeResponse,
  RecoverPasswordRequest,
} from '@/shared/api/auth/types';
import { flashcardsApi } from '@/shared/api/flashcardsApi';

export const authApi = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      login: builder.mutation<LoginResponse, LoginRequest>({
        query: args => {
          return {
            body: args,
            method: 'POST',
            url: '/v1/auth/login',
          };
        },
      }),
      me: builder.query<MeResponse, void>({
        query: () => '/v1/auth/me',
      }),
      recoverPassword: builder.mutation<unknown, RecoverPasswordRequest>({
        query: args => {
          return {
            body: args,
            method: 'POST',
            url: '/v1/auth/recover-password',
          };
        },
      }),
    };
  },
});

export const {
  useLoginMutation,
  useMeQuery,
  useRecoverPasswordMutation: useRecoverPasswordMutation,
} = authApi;
