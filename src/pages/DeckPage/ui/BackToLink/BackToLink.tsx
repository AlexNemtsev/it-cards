import { ComponentPropsWithoutRef } from 'react';
import { Link } from 'react-router-dom';

import { ArrowBack } from '@/shared/assets/icons/ArrowBack';
import { Typography } from '@/shared/ui/Typography';

import s from './BackToLink.module.scss';

type Props = Omit<ComponentPropsWithoutRef<typeof Link>, 'className'>;

export const BackToLink = (props: Props) => {
  const { children, ...restProps } = props;

  return (
    <Typography.Body2>
      <Link {...restProps} className={s.link}>
        <ArrowBack />
        {children}
      </Link>
    </Typography.Body2>
  );
};
