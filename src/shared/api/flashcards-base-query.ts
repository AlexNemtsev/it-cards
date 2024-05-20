import { router } from '@/app/router';
import { Routes } from '@/shared/constants/routes';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { Mutex } from 'async-mutex';

const mutex = new Mutex();
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.flashcards.andrii.es',
  prepareHeaders: headers => {
    const token = localStorage.getItem('accessToken');

    if (headers.get('Authorization')) {
      return headers;
    }
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
  },
});

export const baseQueryWithReauth: BaseQueryFn<
  FetchArgs | string,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();

      try {
        const refreshToken = localStorage.getItem('accessToken');

        const refreshResult = (await baseQuery(
          {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
            method: 'POST',
            url: '/v2/auth/refresh-token',
          },
          api,
          extraOptions
        )) as any;

        console.log(refreshResult.data);

        if (refreshResult.data) {
          localStorage.setItem('accessToken', refreshResult.data.accessToken.trim());
          localStorage.setItem('refreshToken', refreshResult.data.refreshToken.trim());

          result = await baseQuery(args, api, extraOptions);
        } else {
          router.navigate(Routes.LOGIN);
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};
