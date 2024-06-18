import type { Meta, StoryObj } from '@storybook/react';

import { ChangeEvent, useState } from 'react';

import { Typography } from '../Typography';
import { TextField } from './TextField';

const meta = {
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const RegularInput: Story = {
  args: {
    label: 'Regular input',
    type: 'text',
  },
  render: ({ label }) => {
    const [value, setValue] = useState('');
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    return (
      <>
        <TextField label={label} onChange={onChange} value={value} />
        <br />
        <Typography.Body2>{`Now input value is ${value ? value : 'empty'}`}</Typography.Body2>
      </>
    );
  },
};

export const RegularInputDisabled: Story = {
  args: {
    disabled: true,
    label: 'Regular input',
  },
};

export const InputPassword: Story = {
  args: {
    label: 'Input password',
    type: 'password',
  },
  render: ({ label, type }) => {
    const [value, setValue] = useState('');
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    return (
      <>
        <TextField label={label} onChange={onChange} type={type} value={value} />
        <br />
        <Typography.Body2>{`Now input value is ${value ? value : 'empty'}`}</Typography.Body2>
      </>
    );
  },
};
export const InputPasswordWithError: Story = {
  args: {
    error: 'Some error',
    label: 'Input password',
    type: 'password',
  },
  render: ({ error, label, type }) => {
    const [value, setValue] = useState('');
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    return (
      <>
        <TextField error={error} label={label} onChange={onChange} type={type} value={value} />
        <br />
        <Typography.Body2>{`Now input value is ${value ? value : 'empty'}`}</Typography.Body2>
      </>
    );
  },
};

export const InputPasswordDisabled: Story = {
  args: {
    disabled: true,
    label: 'Input password',
    type: 'password',
  },
};
export const InputSearch: Story = {
  args: {
    label: 'Input search',
    type: 'search',
  },
  render: ({ label, type }) => {
    const [value, setValue] = useState('');
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };
    const clearInput = () => {
      setValue('');
    };

    return (
      <>
        <TextField
          clearInput={clearInput}
          label={label}
          onChange={onChange}
          type={type}
          value={value}
        />
        <br />
        <Typography.Body2>{`Now input value is ${value ? value : 'empty'}`}</Typography.Body2>
      </>
    );
  },
};

export const InputSearchWithError: Story = {
  args: {
    error: 'Some error',
    label: 'Input search',
    type: 'search',
  },
  render: ({ error, label, type }) => {
    const [value, setValue] = useState('');
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };
    const clearInput = () => {
      setValue('');
    };

    return (
      <>
        <TextField
          clearInput={clearInput}
          error={error}
          label={label}
          onChange={onChange}
          type={type}
          value={value}
        />
        <br />
        <Typography.Body2>{`Now input value is ${value ? value : 'empty'}`}</Typography.Body2>
      </>
    );
  },
};

export const InputSearchDisabled: Story = {
  args: {
    disabled: true,
    label: 'Input search',
    type: 'search',
  },
};
