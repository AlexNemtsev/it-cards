import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import { CheckedMark } from '@/assets/icons/CheckedMark/CheckedMark';
import { Typography } from '@/components/ui/Typography';

import { Checkbox } from './Checkbox';

const meta = {
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseCheckbox: Story = {
  args: {
    checked: true,
    icon: <CheckedMark />,
  },

  render: ({ checked, icon }) => {
    const [displayValue, setDisplayValue] = useState(true);

    const onCheckedChange = (value: boolean) => {
      setDisplayValue(value);
    };

    return (
      <>
        <Checkbox checked={checked} icon={icon} onCheckedChange={onCheckedChange} />
        <br />
        <Typography.Caption>{`Now checkbox is ${
          displayValue ? 'checked' : 'unchecked'
        }`}</Typography.Caption>
      </>
    );
  },
};
export const DisabledCheckedCheckbox: Story = {
  args: {
    checked: true,
    disabled: true,
    icon: <CheckedMark />,
  },
};
export const DisabledUncheckedCheckbox: Story = {
  args: {
    disabled: true,
    icon: <CheckedMark />,
  },
};
