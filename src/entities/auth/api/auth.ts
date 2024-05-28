import {
  LoginRequest,
  LoginResponse,
  MeResponse,
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
      me: builder.query<MeResponse, void>({
        providesTags: ['Me'],
        query: () => '/v1/auth/me',
      }),
      recoverPassword: builder.mutation<RecoverPasswordResponse, RecoverPasswordRequest>({
        query: args => {
          return {
            body: args,
            method: 'POST',
            url: '/v1/auth/recover-password',
          };
        },
      }),
      signUp: builder.mutation<SignUpResponse, SignUpRequest>({
        query: args => ({
          body: args,
          method: 'POST',
          url: '/v1/auth/sign-up',
        }),
      }),
      updateUserData: builder.mutation({
        invalidatesTags: ['Me'],
        query: body => ({
          body,
          method: 'PATCH',
          url: '/v1/auth/me',
        }),
      }),
    };
  },
});

export const {
  useMeQuery,
  useRecoverPasswordMutation,
  useSignUpMutation,
  useUpdateUserDataMutation,
} = authApi;
