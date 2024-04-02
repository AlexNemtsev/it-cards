import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import { Typography } from '@/components/ui/Typography';

import { RadioGroup } from './RadioGroup';

const meta = {
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const BaseExample: Story = {
  args: {
    options: [
      { label: 'HTML', value: '1' },
      { label: 'CSS', value: '2' },
      { label: 'JS', value: '3' },
      { disabled: true, label: 'PHP disabled', value: '4' },
      { label: 'React', value: '5' },
    ],
  },
  render: ({ options }) => {
    const [displayValue, setDisplayValue] = useState('empty');

    const onValueChange = (value: string) => {
      setDisplayValue(value);
    };

    return (
      <>
        <Typography.Caption>{`your chose is ${displayValue}`}</Typography.Caption>
        <RadioGroup onValueChange={onValueChange} options={options} />
      </>
    );
  },
};
