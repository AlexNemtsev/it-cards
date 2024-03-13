import type { Meta, StoryObj } from '@storybook/react';

import { Burger } from '@/assets/icons/Burger/Burger';

import { Dropdown } from './Dropdown';

const meta = {
  component: Dropdown,
  tags: ['autodocs'],
  title: 'Components/Dropdown',
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DropdownExample: Story = {
  args: {
    icon: <Burger />,
  },
};
