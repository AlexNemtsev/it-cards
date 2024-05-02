import { LoginRequest, LoginResponse } from '@/pages/LoginPage/api/login.types';
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
    };
  },
});

export const { useLoginMutation } = authApi;
