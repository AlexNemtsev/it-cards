import {
  LoginRequest,
  LoginResponse,
  RecoverPasswordRequest,
  RecoverPasswordResponse,
  SignUpRequest,
  SignUpResponse,
} from '@/entities/auth/api/types';
import { flashcardsApi } from '@/shared/api/flashcardsApi';

export const authApi = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      login: builder.mutation<LoginResponse, LoginRequest>({
        invalidatesTags: ['Me'],
        query: body => ({
          body,
          method: 'POST',
          url: '/v1/auth/login',
        }),
      }),
      logout: builder.mutation<void, void>({
        query: () => ({
          method: 'POST',
          url: '/v2/auth/logout',
        }),
      }),
      recoverPassword: builder.mutation<RecoverPasswordResponse, RecoverPasswordRequest>({
        query: body => {
          return {
            body,
            method: 'POST',
            url: '/v1/auth/recover-password',
          };
        },
      }),
      signUp: builder.mutation<SignUpResponse, SignUpRequest>({
        query: body => ({
          body,
          method: 'POST',
          url: '/v1/auth/sign-up',
        }),
      }),
    };
  },
});

export const { useRecoverPasswordMutation, useSignUpMutation } = authApi;
