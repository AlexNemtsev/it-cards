import { FC } from 'react';

import { compose } from '@reduxjs/toolkit';

import { withReduxProvider } from './withReduxProvider';

export const withProviders: (Component: FC) => FC = compose(withReduxProvider);
