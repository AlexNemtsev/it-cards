import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react';

import s from './ToolsButton.module.scss';

type Props = { children: ReactNode } & ComponentPropsWithoutRef<'button'>;

export const ToolsButton = forwardRef<ElementRef<'button'>, Props>((props: Props, ref) => {
  const { children, ...rest } = props;

  return (
    <button className={s.toolsButton} {...rest} ref={ref}>
      {children}
    </button>
  );
});
