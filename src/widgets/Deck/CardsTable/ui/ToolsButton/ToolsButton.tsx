import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import s from './ToolsButton.module.scss';

type Props = ComponentPropsWithoutRef<'button'>;

export const ToolsButton = forwardRef<ElementRef<'button'>, Props>((props: Props, ref) => {
  return <button className={s.toolsButton} {...props} ref={ref} />;
});
