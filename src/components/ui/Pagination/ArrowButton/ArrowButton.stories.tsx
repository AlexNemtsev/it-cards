import type { Meta, StoryObj } from '@storybook/react';

import { ArrowButton } from './ArrowButton';

const meta = {
  component: ArrowButton,
  tags: ['autodocs'],
  title: 'Components/Pagination/ArrowButton',
} satisfies Meta<typeof ArrowButton>;

export default meta;
type Story = StoryObj<typeof ArrowButton>;
export const PrevButton: Story = {
  args: {
    isPrev: true,
  },
};
export const NextButton: Story = {
  args: {},
};
