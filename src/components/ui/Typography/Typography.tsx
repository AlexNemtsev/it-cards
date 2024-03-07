import { ComponentPropsWithoutRef, ElementType, FC, ReactNode } from 'react';

import s from './Typography.module.scss';

type Props<T extends ElementType> = {
  children?: ReactNode;
  light?: boolean;
} & ComponentPropsWithoutRef<T>;

const createTypographyComponent = <T extends ElementType>(
  basicClassName: Component
): FC<Props<T>> => {
  return (props: Props<T>) => {
    const { className, light } = props;
    const Component = COMPONENTS[basicClassName];
    const classNames = `${s[basicClassName]} ${light ? s.light : ''} ${className}`;

    return <Component className={classNames} {...props} />;
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
