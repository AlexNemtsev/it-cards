import { Star } from '@/shared/assets/icons/Star';
import { StarOutlined } from '@/shared/assets/icons/StarOutlined';

import s from './Rating.module.scss';

type Props = {
  rating: number;
};

export const Rating = (props: Props) => {
  const { rating } = props;

  const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(i < rating ? <Star key={i} /> : <StarOutlined key={i} />);
  }

  return <div className={s.stars}>{stars}</div>;
};
