import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import { FormValues } from '@/components/profile/PersonalInformation/EditNickNameForm/EditNickNameForm';
import avatar from '@/shared/assets/img/avatar-for-dropmenu.png';
import { httpHandlers } from '@/shared/storyes/httpHandlers';

import { PersonalInformation } from './PersonalInformation';

// const avatarFile = new File([avatar], 'avatar.png');
// const formData = new FormData();
//
// formData.append('avatar', avatarFile);
// const avatarFromFile = formData.get('avatar');
//
// console.log('avatarFromFile=', avatarFromFile);
// const avatarUrl = URL.createObjectURL(avatarFile);
//
// console.log('avatarUrl', avatarUrl);
// const imgTag = `<img src="${avatarUrl}" alt="Avatar">`;

const meta = {
  component: PersonalInformation,
  tags: ['autodocs'],
  title: 'Auth/PersonalInformation',
} satisfies Meta<typeof PersonalInformation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Opened: Story = {
  args: {
    avatar,
    // avatar:
    //   'https://staging-it-incubator.s3.eu-central-1.amazonaws.com/flashcards/Image/8fe3aca5-d273-4122-b041-a4a2b9db8372_404.png',
    email: 'bla@bla.bla',
    logout: () => {},
    name: 'Ivan I',
    onSubmit: () => {},
    setAvatar: () => {},
  },
  parameters: {
    msw: {
      handlers: httpHandlers,
    },
  },
  render: args => {
    return <PersonalInformationWrapper {...args} />;
  },
};
export const ExampleWithAvatar: Story = {
  args: {
    avatar: avatar,
    email: 'qw@qw.qw1',
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
    email: 'qw@qw.qw2',
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
  email: string;
  name: string;
};
const PersonalInformationWrapper = (props: Props) => {
  const { avatar, email, name } = props;
  // const [ava, setAva] = useState(avatar);
  const [nickname, setNickname] = useState(name);

  const onSubmitHandler = (data: FormValues) => {
    console.log(data.name);
    setNickname(data.name);
  };
  const onLogoutHandler = () => {
    console.log('Logout');
  };

  return (
    <PersonalInformation
      avatar={avatar}
      email={email}
      logout={onLogoutHandler}
      name={nickname}
      onSubmit={onSubmitHandler}
      setAvatar={() => {}}
    />
  );
};
