import { LoginRequest, LoginResponse } from '@/shared/api/auth/types';
import { flashcardsApi } from '@/shared/api/flashcardsApi';

export const authApi = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      login: builder.mutation<LoginResponse, LoginRequest>({
        query: args => {
          return {
            body: {
              ...args,
            },
            method: 'POST',
            url: 'v1/auth/login',
          };
        },
      }),
      recoverPassword: builder.mutation({
        query: args => {
          return {
            body: { ...args },
            method: 'POST',
            url: '/v1/auth/recover-password',
          };
        },
      }),
    };
  },
});

export const { useLoginMutation, useRecoverPasswordMutation: useRecoverPasswordMutation } = authApi;
