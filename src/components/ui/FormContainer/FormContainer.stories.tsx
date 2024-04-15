import type { Meta, StoryObj } from '@storybook/react';

import { FormContainer } from './FormContainer';

const meta = {
  component: FormContainer,
  tags: ['autodocs'],
  title: 'Components/FormContainer',
} satisfies Meta<typeof FormContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FormContainerExample: Story = {
  args: {
    children: 'Form Container',
    style: {
      height: '598px',
    },
  },
};
