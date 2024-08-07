import '@/app/styles/index.scss';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';

import type { Preview } from '@storybook/react';
import { decorators } from './decorators';

const preview: Preview = {
  decorators,
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#000000',
        },
        {
          name: 'light',
          value: '#ffffff',
        },
      ],
    },
  },
};

export default preview;
