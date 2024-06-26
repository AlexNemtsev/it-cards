import { ComponentPropsWithoutRef } from 'react';
import { Link } from 'react-router-dom';

import { ArrowBack } from '@/shared/assets/icons/ArrowBack';
import { Typography } from '@/shared/ui/Typography';
import { clsx } from 'clsx';

import s from './BackToLink.module.scss';

type Props = ComponentPropsWithoutRef<typeof Link>;

export const BackToLink = (props: Props) => {
  const { children, className, ...restProps } = props;

  const classNames = clsx(s.link, className);

  return (
    <Typography.Body2>
      <Link {...restProps} className={classNames}>
        <ArrowBack />
        {children}
      </Link>
    </Typography.Body2>
  );
};
