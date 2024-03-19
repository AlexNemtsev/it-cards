import type { Meta, StoryObj } from '@storybook/react';

import { RadioGroup } from './RadioGroup';

const meta = {
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const BaseExample: Story = {
  args: {
    options: [
      { label: 'HTML', value: '1' },
      { label: 'CSS', value: '2' },
      { label: 'JS', value: '3' },
      { disabled: true, label: 'PHP disabled', value: '4' },
      { label: 'React', value: '5' },
    ],
  },
};
