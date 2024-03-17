import type { Meta, StoryObj } from '@storybook/react';

import { RadioGroup } from './RadioGroup';
import { RadioGroupItem } from './RadiogroupItem/RadioGroupItem';

const meta = {
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseExample: Story = {
  args: {
    children: (
      <>
        <RadioGroupItem id="1" label="HTML" value="1" />
        <RadioGroupItem id="2" label="CSS" value="2" />
        <RadioGroupItem id="3" label="JS" value="3" />
      </>
    ),
  },
};
