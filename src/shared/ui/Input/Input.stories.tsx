import type { Meta, StoryObj } from '@storybook/react';

import { ChangeEvent, useState } from 'react';

import { Input } from '.';
import { Typography } from '../Typography';

const meta = {
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InputTypeText: Story = {
  render: () => {
    const [displayValue, setDisplayValue] = useState('');

    const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
      setDisplayValue(e.target.value);
    };

    return (
      <>
        <Input label="Input" onChange={onValueChange} value={displayValue} />
        <Typography.Body1>{displayValue}</Typography.Body1>
      </>
    );
  },
};

export const InputTypeTextError: Story = {
  args: {
    error: 'Error',
    label: 'Input',
    value: 'Error!',
  },
};

export const InputTypeTextDisabled: Story = {
  args: {
    disabled: true,
    label: 'Input',
  },
};

export const InputTypePassword: Story = {
  render: () => {
    const [password, setPassword] = useState('');

    const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    };

    return (
      <>
        <Input label="Input" onChange={onValueChange} type="password" value={password} />
        <Typography.Body1>{password}</Typography.Body1>
      </>
    );
  },
};

export const InputTypePasswordError: Story = {
  args: {
    error: 'Error!',
    label: 'Input',
    type: 'password',
    value: 'Error',
  },
};
export const InputTypePasswordDisabled: Story = {
  args: {
    disabled: true,
    label: 'Input',
    type: 'password',
  },
};

export const InputTypeSearch: Story = {
  render: () => {
    const [search, setSearch] = useState('');

    const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    };

    const clearSearch = () => {
      setSearch('');
    };

    return (
      <>
        <Input onChange={onValueChange} onClearInput={clearSearch} type="search" value={search} />
        <Typography.Body1>{search}</Typography.Body1>
      </>
    );
  },
};

export const InputTypeSearchError: Story = {
  args: {
    error: 'Error!',
    type: 'search',
    value: 'Input search',
  },
};

export const InputTypeSearchDisabled: Story = {
  args: {
    disabled: true,
    type: 'search',
  },
};
