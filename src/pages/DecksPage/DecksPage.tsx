import { useGetDecksQuery } from '@/entities/deck/model/api';

import s from './DecksPage.module.scss';

export const DecksPage = () => {
  const result = useGetDecksQuery();

  console.log(result);

  return <div className={s.decks}>DecksPage</div>;
};
