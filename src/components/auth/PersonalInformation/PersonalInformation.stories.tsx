import type { Meta, StoryObj } from '@storybook/react';

import { FormValues, PersonalInformation } from './PersonalInformation';

const meta = {
  component: PersonalInformation,
  tags: ['autodocs'],
  title: 'Auth/PersonalInformation',
} satisfies Meta<typeof PersonalInformation>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    onSubmit: (data: FormValues) => {
      console.log(data);
    },
  },
  render: ({ onSubmit }) => {
    return <PersonalInformation onSubmit={onSubmit} />;
  },
};
