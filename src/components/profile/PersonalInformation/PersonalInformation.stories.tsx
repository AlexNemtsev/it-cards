import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import avatar from '@/assets/img/avatar-for-dropmenu.png';
import { FormValues } from '@/components/profile/PersonalInformation/EditNickNameForm/EditNickNameForm';

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
  render: args => {
    return <PersonalInformationWrapper {...args} />;
  },
};
export const ExampleWithoutAvatar: Story = {
  args: {
    logout: () => {},
    name: 'Petr',
    onSubmit: () => {},
    setAvatar: () => {},
  },
  render: args => {
    return <PersonalInformationWrapper {...args} />;
  },
};

type Props = {
  avatar?: string;
  name: string;
};
const PersonalInformationWrapper = (props: Props) => {
  const { avatar, name } = props;
  const [ava, setAva] = useState(avatar);
  const [nickname, setNickname] = useState(name);

  const onSubmitHandler = (data: FormValues) => {
    console.log(data.nickname);
    setNickname(data.nickname);
  };
  const onLogoutHandler = () => {
    console.log('Logout');
  };

  return (
    <PersonalInformation
      avatar={ava}
      logout={onLogoutHandler}
      name={nickname}
      onSubmit={onSubmitHandler}
      setAvatar={setAva}
    />
  );
};
