import type { Meta, StoryObj } from '@storybook/react';

import { Rating } from './Rating';

const meta = {
  component: Rating,
  tags: ['autodocs'],
  title: 'Components/Rating',
} satisfies Meta<typeof Rating>;

export default meta;

type Story = StoryObj<typeof meta>;

export const RatingExample: Story = {
  args: {
    rating: 3,
  },
};
