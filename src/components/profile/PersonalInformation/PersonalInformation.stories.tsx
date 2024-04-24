import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import avatar from '@/assets/img/avatar-for-dropmenu.png';
import { FormValues } from '@/components/profile/PersonalInformation/EditNickNameForm';

import { PersonalInformation } from './PersonalInformation';

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
    logout: () => {},
    name: 'Ivan',
    onSubmit: () => {},
    setAvatar: () => {},
  },
  render: ({ avatar, name }) => {
    const [ava, setAvatar] = useState(avatar);
    const [nickname, setName] = useState(name);

    const onSubmitHandler = (data: FormValues) => {
      console.log(data);
      setName(data.nickname);
    };
    const onLogoutHandler = () => {
      alert('Куда же Вы?');
    };

    return (
      <div>
        <PersonalInformation
          avatar={ava}
          logout={onLogoutHandler}
          name={nickname}
          onSubmit={onSubmitHandler}
          setAvatar={setAvatar}
        />
      </div>
    );
  },
};
export const ExampleWithoutAvatar: Story = {
  args: {
    logout: () => {},
    name: 'Petr',
    onSubmit: () => {},
    setAvatar: () => {},
  },
  render: ({ avatar, name }) => {
    const [ava, setAvatar] = useState(avatar);
    const [nickname, setName] = useState(name);

    const onSubmitHandler = (data: FormValues) => {
      console.log(data);
      setName(data.nickname);
    };
    const onLogoutHandler = () => {
      alert('Куда же Вы?');
    };

    return (
      <div>
        <PersonalInformation
          avatar={ava}
          logout={onLogoutHandler}
          name={nickname}
          onSubmit={onSubmitHandler}
          setAvatar={setAvatar}
        />
      </div>
    );
  },
};
