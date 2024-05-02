import type { Meta, StoryObj } from '@storybook/react';

import { Provider } from 'react-redux';

import { DecksPage } from '.';
import { store } from '../../app/store';

const meta = {
  component: DecksPage,
  decorators: [
    Story => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  tags: ['autodocs'],
  title: 'pages/DecksPage',
} satisfies Meta<typeof DecksPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
