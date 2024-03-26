import { ComponentPropsWithoutRef, ElementType, FC, ReactNode } from 'react';

import { clsx } from 'clsx';

import s from './Typography.module.scss';

type Props<T extends ElementType> = {
  as?: ElementType;
  children?: ReactNode;
} & ComponentPropsWithoutRef<T>;

const createTypographyComponent = <T extends ElementType>(
  basicClassName: Component
): FC<Props<T>> => {
  return (props: Props<T>) => {
    const { as, className, ...restProps } = props;
    const Component = as || COMPONENTS[basicClassName];
    const classNames = clsx(s[basicClassName], className);

    return <Component className={classNames} {...restProps} />;
  };
};

const COMPONENTS = {
  body1: 'p',
  body2: 'p',
  caption: 'span',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  link1: 'a',
  link2: 'a',
  overline: 'p',
  subtitle1: 'p',
  subtitle2: 'p',
} as const;

export const Typography = {
  Body1: createTypographyComponent('body1'),
  Body2: createTypographyComponent('body2'),
  Caption: createTypographyComponent('caption'),
  H1: createTypographyComponent('h1'),
  H2: createTypographyComponent('h2'),
  H3: createTypographyComponent('h3'),
  H4: createTypographyComponent('h4'),
  Link1: createTypographyComponent('link1'),
  Link2: createTypographyComponent('link2'),
  Overline: createTypographyComponent('overline'),
  Subtitle1: createTypographyComponent('subtitle1'),
  Subtitle2: createTypographyComponent('subtitle2'),
};

type Component = keyof typeof COMPONENTS;
