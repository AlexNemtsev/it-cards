import {
  LoginRequest,
  LoginResponse,
  MeResponse,
  RecoverPasswordRequest,
  RecoverPasswordResponse,
  SignUpRequest,
  SignUpResponse,
} from '@/entities/auth/api/types';
import { flashcardsApi } from '@/shared/api/flashcards-api';

export const authApi = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      login: builder.mutation<LoginResponse, LoginRequest>({
        invalidatesTags: ['Me'],
        async onQueryStarted(_, { queryFulfilled }) {
          const { data } = await queryFulfilled;

          console.log(data);
          if (!data) {
            return;
          }

          localStorage.setItem('accessToken', data.accessToken);
          localStorage.setItem('refreshToken', data.refreshToken);
        },
        query: body => ({
          body,
          method: 'POST',
          url: '/v1/auth/login',
        }),
      }),
      logout: builder.mutation<void, void>({
        invalidatesTags: ['Me'],
        query: () => ({
          method: 'POST',
          url: '/v1/auth/logout',
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
        query: args => {
          return {
            body: args,
            method: 'POST',
            url: '/v1/auth/sign-up',
          };
        },
      }),
    };
  },
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useMeQuery,
  useRecoverPasswordMutation,
  useSignUpMutation,
} = authApi;
