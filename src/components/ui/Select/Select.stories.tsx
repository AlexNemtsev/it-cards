import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';
import { SelectItemValue } from './SelectItemValue';

const selectItemValues: SelectItemValue[] = [
  { id: 1, value: 'apple' },
  { id: 2, value: 'pea' },
  { id: 3, value: 'cocount' },
  { id: 4, value: 'banana' },
];

const meta = {
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasePrimitiveSelect: Story = {
  args: {
    ariaLabel: 'Select-box',
    labelValue: 'Select-box',
    placeholder: 'Select-box',
    selectItemValues: selectItemValues,
  },
};
export const PrimitiveSelectDisabled: Story = {
  args: {
    ariaLabel: 'Select-box',
    disabled: true,
    labelValue: 'Select-box',
    placeholder: 'Select-box',
    selectItemValues: selectItemValues,
  },
};
