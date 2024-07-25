import { BackToLink } from '@/pages/DeckPage/ui/BackToLink';
import { Routes } from '@/shared/constants/routes';
import { PageContainer } from '@/shared/ui/PageContainer';
import { CardFilter } from '@/widgets/Deck/CardFilter';
import { CardHeader } from '@/widgets/Deck/CardHeader';
import { CardsTable } from '@/widgets/Deck/CardsTable';

import s from './DeckPage.module.scss';

export const DeckPage = () => {
  return (
    <PageContainer className={s.container}>
      <BackToLink className={s.backToLink} to={Routes.DECKS}>
        Back to Decks List
      </BackToLink>

      <CardHeader />
      <CardFilter />
      <CardsTable />
    </PageContainer>
  );
};
