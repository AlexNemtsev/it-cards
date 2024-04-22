import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import avatar from '@/assets/img/avatar-for-dropmenu.png';

import { FormValues, PersonalInformation } from './PersonalInformation';

const meta = {
  component: PersonalInformation,
  tags: ['autodocs'],
  title: 'Auth/PersonalInformation',
} satisfies Meta<typeof PersonalInformation>;

export default meta;
type Story = StoryObj<typeof meta>;
export const ExampleWithAvatar: Story = {
  args: {
    avatar: avatar,
    onSubmit: (data: FormValues) => {
      console.log(data);
    },
    setAvatar: () => {},
  },
  render: ({ avatar, onSubmit }) => {
    const [ava, setAvatar] = useState(avatar);

    return (
      <div>
        <PersonalInformation avatar={ava} onSubmit={onSubmit} setAvatar={setAvatar} />
      </div>
    );
  },
};
