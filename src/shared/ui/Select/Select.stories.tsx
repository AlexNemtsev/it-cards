import type { Meta, StoryObj } from '@storybook/react';

import { ComponentPropsWithoutRef, useState } from 'react';

import { Typography } from '../Typography';
import { Select } from './Select';

const selectData: ComponentPropsWithoutRef<typeof Select> = {
  placeholder: '100',
  values: [
    { id: 1, value: '10' },
    { id: 2, value: '20' },
    { id: 3, value: '30' },
    { id: 4, value: '40' },
    { id: 5, value: '50' },
    { id: 6, value: '60' },
    { id: 7, value: '70' },
    { id: 8, value: '80' },
    { id: 9, value: '90' },
  ],
};

const meta = {
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseSelect: Story = {
  args: {
    placeholder: selectData.placeholder,
    values: selectData.values,
  },
  render: ({ placeholder, values }) => {
    const [displayValue, setDisplayValue] = useState('');

    const onValueChange = (value: string) => {
      setDisplayValue(value);
    };

    return (
      <>
        <Select onValueChange={onValueChange} placeholder={placeholder} values={values} />
        <Typography.Body1>{displayValue}</Typography.Body1>
      </>
    );
  },
};

export const SelectOpen: Story = {
  args: {
    open: true,
    placeholder: selectData.placeholder,
    values: selectData.values,
  },
};

export const SelectDisabled: Story = {
  args: {
    disabled: true,
    placeholder: selectData.placeholder,
    values: selectData.values,
  },
};
