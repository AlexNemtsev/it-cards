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
    name: 'Ivan',
    onSubmit: () => {},
    setAvatar: () => {},
  },
  render: ({ avatar, name }) => {
    const [ava, setAvatar] = useState(avatar);
    const [nickname, setName] = useState(name);

    const onSubmitHandler = (data: FormValues) => {
      console.log('123', data);
      setName(data.nickname);
    };

    return (
      <div>
        <PersonalInformation
          avatar={ava}
          name={nickname}
          onSubmit={onSubmitHandler}
          setAvatar={setAvatar}
        />
      </div>
    );
  },
};
