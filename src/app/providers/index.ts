import { FC } from 'react';

import { withToastifyProvider } from '@/app/providers/withToastifyProvider';
import { compose } from '@reduxjs/toolkit';

import { withReduxProvider } from './withReduxProvider';

export const withProviders: (Component: FC) => FC = compose(
  withReduxProvider,
  withToastifyProvider
);
