import type { Meta, StoryObj } from '@storybook/react';

import { PrimitiveSelect } from './PrimitiveSelect';
import { SelectItemValue } from './Types';

const selectItemValues: SelectItemValue[] = [
  { id: 1, value: 'apple' },
  { id: 2, value: 'pea' },
  { id: 3, value: 'cocount' },
  { id: 4, value: 'banana' },
];

const meta = {
  component: PrimitiveSelect,
  tags: ['autodocs'],
  // title: 'Components/PrimitiveSelect',
} satisfies Meta<typeof PrimitiveSelect>;

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
