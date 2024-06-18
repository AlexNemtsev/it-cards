import { User } from '@/entities/auth/api/types';
import { flashcardsApi } from '@/shared/api/flashcardsApi';

export const authApi = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      me: builder.query<User, void>({
        providesTags: ['Me'],
        query: () => '/v1/auth/me',
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

export const { useMeQuery, useUpdateUserDataMutation } = authApi;
