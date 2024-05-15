import { CSSProperties, ComponentPropsWithoutRef } from 'react';

import { clsx } from 'clsx';

import s from './Page.module.scss';

type Props = {
  mt?: CSSProperties['marginTop'];
} & ComponentPropsWithoutRef<'div'>;
export const Page = (props: Props) => {
  const { className, mt = 34, style, ...restProps } = props;
  const classNames = clsx(className, s.container);
  const styles: CSSProperties = { marginTop: mt, ...style };

  return <div className={classNames} style={styles} {...restProps} />;
};
