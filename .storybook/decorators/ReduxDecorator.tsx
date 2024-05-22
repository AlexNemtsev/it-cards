import { FC } from 'react';
import { withReduxProvider } from '../../src/app/providers/withReduxProvider';

export const ReduxDecorator = (Story: FC) => {
  const WithRedux = withReduxProvider(Story);

  return <WithRedux />;
};
