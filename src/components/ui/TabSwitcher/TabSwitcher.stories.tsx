import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import { Typography } from '@/components/ui/Typography';

import { TabSwitcher } from './TabSwitcher';

const meta = {
  component: TabSwitcher,
  tags: ['autodocs'],
  title: 'Components/TabSwitcher',
} satisfies Meta<typeof TabSwitcher>;

export default meta;

type Story = StoryObj<typeof meta>;

const TabSwitcherStates = {
  ACTIVE: 'Active',
  DISABLED: 'Disabled',
  INACTIVE: 'Inactive',
};

export const TabSwitcherExample: Story = {
  args: {
    tabOptions: [
      {
        label: 'First',
        value: 'first',
      },
      {
        label: 'Second',
        value: 'second',
      },
      {
        disabled: true,
        label: 'Third',
        value: 'third',
      },
    ],
  },
  render: ({ tabOptions }) => {
    const [displayValue, setDisplayValue] = useState('');

    const onValueChange = (value: string) => {
      setDisplayValue(value);
    };

    return (
      <>
        <TabSwitcher onValueChange={onValueChange} tabOptions={tabOptions} />
        <Typography.Body1>{displayValue}</Typography.Body1>
      </>
    );
  },
};

export const ActiveTab: Story = {
  args: {
    tabOptions: [
      {
        label: TabSwitcherStates.ACTIVE,
        value: TabSwitcherStates.ACTIVE,
      },
    ],
  },
  render: ({ tabOptions }) => {
    return <TabSwitcher defaultValue={TabSwitcherStates.ACTIVE} tabOptions={tabOptions} />;
  },
};

export const InactiveTab: Story = {
  args: {
    tabOptions: [
      {
        label: TabSwitcherStates.INACTIVE,
        value: TabSwitcherStates.INACTIVE,
      },
    ],
  },
  render: ({ tabOptions }) => {
    return <TabSwitcher defaultValue={TabSwitcherStates.ACTIVE} tabOptions={tabOptions} />;
  },
};

export const DisabledTab: Story = {
  args: {
    tabOptions: [
      {
        disabled: true,
        label: TabSwitcherStates.DISABLED,
        value: TabSwitcherStates.DISABLED,
      },
    ],
  },
  render: ({ tabOptions }) => {
    return <TabSwitcher tabOptions={tabOptions} />;
  },
};
