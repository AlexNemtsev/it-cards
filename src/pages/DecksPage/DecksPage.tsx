import { DecksHeader } from '@/pages/DecksPage/ui/DecksHeader';
import { PageContainer } from '@/shared/ui/PageContainer';
import { DecksFilters } from '@/widgets/Decks/DecksFilters';
import { DecksTable } from '@/widgets/Decks/DecksTable';

import s from './DecksPage.module.scss';

export const DecksPage = () => {
  return (
    <PageContainer className={s.container}>
      <DecksHeader />
      <DecksFilters />
      <DecksTable />
    </PageContainer>
  );
};
