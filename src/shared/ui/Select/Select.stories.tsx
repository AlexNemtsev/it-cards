import type { Meta, StoryObj } from '@storybook/react';

import { ComponentPropsWithoutRef, useState } from 'react';

import { Typography } from '../Typography';
import { Select } from './Select';

const selectData: ComponentPropsWithoutRef<typeof Select> = {
  label: 'Select-box',
  placeholder: 'Select-box',
  values: [
    { id: 1, value: 'apple' },
    { id: 2, value: 'pea' },
    { id: 3, value: 'coconut' },
    { id: 4, value: 'banana' },
  ],
};

const smallSelectData: ComponentPropsWithoutRef<typeof Select> = {
  isSmall: true,
  label: '100',
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
    label: selectData.label,
    placeholder: selectData.placeholder,
    values: selectData.values,
  },
  render: ({ label, placeholder, values }) => {
    const [displayValue, setDisplayValue] = useState('');

    const onValueChange = (value: string) => {
      setDisplayValue(value);
    };

    return (
      <>
        <Select
          label={label}
          onValueChange={onValueChange}
          placeholder={placeholder}
          values={values}
        />
        <Typography.Body1>{displayValue}</Typography.Body1>
      </>
    );
  },
};

export const SelectOpen: Story = {
  args: {
    label: selectData.label,
    open: true,
    placeholder: selectData.placeholder,
    values: selectData.values,
  },
};

export const SelectDisabled: Story = {
  args: {
    disabled: true,
    label: selectData.label,
    placeholder: selectData.placeholder,
    values: selectData.values,
  },
};

export const SmallSelect: Story = {
  args: {
    isSmall: smallSelectData.isSmall,
    label: smallSelectData.label,
    placeholder: smallSelectData.placeholder,
    values: smallSelectData.values,
  },
  render: ({ isSmall, label, placeholder, values }) => {
    const [displayValue, setDisplayValue] = useState('');

    const onValueChange = (value: string) => {
      setDisplayValue(value);
    };

    return (
      <>
        <Select
          isSmall={isSmall}
          label={label}
          onValueChange={onValueChange}
          placeholder={placeholder}
          values={values}
        />
        <Typography.Body1>{displayValue}</Typography.Body1>
      </>
    );
  },
};

export const SmallSelectOpen: Story = {
  args: {
    isSmall: smallSelectData.isSmall,
    label: smallSelectData.label,
    placeholder: smallSelectData.placeholder,
    values: smallSelectData.values,
  },
  render: ({ isSmall, label, placeholder, values }) => {
    const [displayValue, setDisplayValue] = useState('');

    const onValueChange = (value: string) => {
      setDisplayValue(value);
    };

    return (
      <>
        <Select
          isSmall={isSmall}
          label={label}
          onValueChange={onValueChange}
          open
          placeholder={placeholder}
          values={values}
        />
        <Typography.Body1>{displayValue}</Typography.Body1>
      </>
    );
  },
};
