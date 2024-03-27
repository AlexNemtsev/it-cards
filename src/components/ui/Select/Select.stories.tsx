import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import { Typography } from '../Typography';
import { Select } from './Select';
import { SelectItemValue } from './SelectItemValue';

const selectData = {
  label: 'Select-box',
  placeholder: 'Select-box',
  values: [
    { id: 1, value: 'apple' },
    { id: 2, value: 'pea' },
    { id: 3, value: 'coconut' },
    { id: 4, value: 'banana' },
  ] as SelectItemValue[],
};

const smallSelectData = {
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
  ] as SelectItemValue[],
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
    selectItemValues: selectData.values,
  },
  render: () => {
    const [displayValue, setDisplayValue] = useState('');

    const onValueChange = (value: string) => {
      setDisplayValue(value);
    };

    return (
      <>
        <Select
          label={selectData.label}
          onValueChange={onValueChange}
          placeholder={selectData.placeholder}
          selectItemValues={selectData.values}
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
    selectItemValues: selectData.values,
  },
};
export const SelectDisabled: Story = {
  args: {
    disabled: true,
    label: selectData.label,
    placeholder: selectData.placeholder,
    selectItemValues: selectData.values,
  },
};

export const SmallSelect: Story = {
  args: {
    isSmall: smallSelectData.isSmall,
    label: smallSelectData.label,
    placeholder: smallSelectData.placeholder,
    selectItemValues: smallSelectData.values,
  },
  render: () => {
    const [displayValue, setDisplayValue] = useState('');

    const onValueChange = (value: string) => {
      setDisplayValue(value);
    };

    return (
      <>
        <Select
          isSmall={smallSelectData.isSmall}
          label={smallSelectData.label}
          onValueChange={onValueChange}
          placeholder={smallSelectData.placeholder}
          selectItemValues={smallSelectData.values}
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
    selectItemValues: smallSelectData.values,
  },
  render: () => {
    const [displayValue, setDisplayValue] = useState('');

    const onValueChange = (value: string) => {
      setDisplayValue(value);
    };

    return (
      <>
        <Select
          isSmall={smallSelectData.isSmall}
          label={smallSelectData.label}
          onValueChange={onValueChange}
          open
          placeholder={smallSelectData.placeholder}
          selectItemValues={smallSelectData.values}
        />
        <Typography.Body1>{displayValue}</Typography.Body1>
      </>
    );
  },
};
