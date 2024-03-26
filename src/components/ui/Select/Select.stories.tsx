import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import { Typography } from '../Typography';
import { Select } from './Select';
import { SelectItemValue } from './SelectItemValue';

const selectData = {
  ariaLabel: 'Select-box',
  label: 'Select-box',
  placeholder: 'Select-box',
  values: [
    { id: 1, value: 'apple' },
    { id: 2, value: 'pea' },
    { id: 3, value: 'cocount' },
    { id: 4, value: 'banana' },
  ] as SelectItemValue[],
};

const smallSelectData = {
  ariaLabel: 'pagination',
  isSmall: true,
  placeholder: '100',
  values: [
    { id: 1, value: '1' },
    { id: 2, value: '2' },
    { id: 3, value: '3' },
    { id: 4, value: '4' },
    { id: 5, value: '5' },
    { id: 6, value: '6' },
    { id: 7, value: '7' },
    { id: 8, value: '8' },
    { id: 9, value: '9' },
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
    ariaLabel: selectData.ariaLabel,
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
          ariaLabel={selectData.ariaLabel}
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

export const SmallSelect: Story = {
  args: {
    ariaLabel: smallSelectData.ariaLabel,
    isSmall: smallSelectData.isSmall,
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
          ariaLabel={smallSelectData.ariaLabel}
          isSmall={smallSelectData.isSmall}
          onValueChange={onValueChange}
          placeholder={smallSelectData.placeholder}
          selectItemValues={smallSelectData.values}
        />
        <Typography.Body1>{displayValue}</Typography.Body1>
      </>
    );
  },
};

export const SelectOpen: Story = {
  args: {
    ariaLabel: selectData.ariaLabel,
    label: selectData.label,
    open: true,
    placeholder: selectData.placeholder,
    selectItemValues: selectData.values,
  },
};
export const SelectDisabled: Story = {
  args: {
    ariaLabel: selectData.ariaLabel,
    disabled: true,
    label: selectData.label,
    placeholder: selectData.placeholder,
    selectItemValues: selectData.values,
  },
};
