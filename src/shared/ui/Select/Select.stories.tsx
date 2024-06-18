import type { Meta, StoryObj } from '@storybook/react';

import { ComponentPropsWithoutRef, useState } from 'react';

import { Typography } from '@/shared/ui/Typography';

import { Select } from './Select';
import { SelectItem } from './SelectItem';

const VALUES: string[] = ['10', '20', '30', '50', '100'];

const selectData: ComponentPropsWithoutRef<typeof Select> = {
  placeholder: '100',
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
  },
  render: ({ placeholder }) => {
    const [selectValue, setSelectValue] = useState<string>('');

    const onValueChange = (value: string) => {
      setSelectValue(value);
    };

    return (
      <>
        <Select onValueChange={onValueChange} placeholder={placeholder} value={selectValue}>
          {VALUES.map(value => (
            <SelectItem key={value} value={value}>
              {value}
            </SelectItem>
          ))}
        </Select>
        <Typography.Body1>{selectValue}</Typography.Body1>
      </>
    );
  },
};

export const SelectDisabled: Story = {
  args: {
    disabled: true,
    placeholder: selectData.placeholder,
  },
};
