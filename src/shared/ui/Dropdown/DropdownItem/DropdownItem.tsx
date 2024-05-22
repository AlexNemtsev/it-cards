import { ComponentProps } from 'react';

type Props = {} & ComponentProps<'div'>;
export const DropdownItem = (props: Props) => {
  return <div {...props} />;
};
