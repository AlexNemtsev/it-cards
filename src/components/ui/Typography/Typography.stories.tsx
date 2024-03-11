import type { Meta, StoryObj } from '@storybook/react';

import { ReactNode } from 'react';

import { Typography } from './Typography';

const meta = {
  component: Typography.Body1,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography.Body1>;

export default meta;

type Story = StoryObj<typeof meta>;

const createStory = (Component: typeof Typography.Body1, children?: ReactNode): Story => {
  return {
    args: {
      children,
    },
    render: ({ children }) => <Component>{children}</Component>,
  };
};

const testText = 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH';

export const AllTypography = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Typography.H1>Heading 1</Typography.H1>
      <Typography.H2>Heading 2</Typography.H2>
      <Typography.H3>Heading 3</Typography.H3>
      <Typography.H4>Heading 4</Typography.H4>
      <Typography.Body1>Body 1</Typography.Body1>
      <Typography.Body2>Body 2</Typography.Body2>
      <Typography.Subtitle1>Subtitle 1</Typography.Subtitle1>
      <Typography.Subtitle2>Subtitle 2</Typography.Subtitle2>
      <Typography.Caption>Caption</Typography.Caption>
      <Typography.Overline>Overline</Typography.Overline>
      <Typography.Link1>Link</Typography.Link1>
      <Typography.Link2>Link</Typography.Link2>
    </div>
  ),
};

export const H1 = createStory(Typography.H1, testText);

export const H2 = createStory(Typography.H2, testText);

export const H3 = createStory(Typography.H3, testText);

export const H4 = createStory(Typography.H4, testText);

export const Body1 = createStory(Typography.Body1, testText);

export const Body2 = createStory(Typography.Body2, testText);

export const Subtitle1 = createStory(Typography.Subtitle1, testText);

export const Subtitle2 = createStory(Typography.Subtitle2, testText);

export const Caption = createStory(Typography.Caption, testText);

export const Overline = createStory(Typography.Overline, testText);

export const Link1 = createStory(Typography.Link1, testText);

export const Link2 = createStory(Typography.Link2, testText);
