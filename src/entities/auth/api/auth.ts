import {
  LoginRequest,
  LoginResponse,
  RecoverPasswordRequest,
  RecoverResetPasswordResponse,
  ResetPasswordRequestArgs,
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

      recoverPassword: builder.mutation<RecoverResetPasswordResponse, RecoverPasswordRequest>({
        query: body => {
          return {
            body,
            method: 'POST',
            url: '/v1/auth/recover-password',
          };
        },
      }),

      resetPassword: builder.mutation<RecoverResetPasswordResponse, ResetPasswordRequestArgs>({
        query: args => {
          const { token, ...body } = args;

          return {
            body,
            method: 'POST',
            url: `/v1/auth/reset-password/${token}`,
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

export const { useRecoverPasswordMutation, useResetPasswordMutation, useSignUpMutation } = authApi;
