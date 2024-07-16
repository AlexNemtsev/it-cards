import { DecksHeader } from '@/pages/DecksPage/ui/DecksHeader';
import { PageContainer } from '@/shared/ui/PageContainer';
import { DecksFilters } from '@/widgets/decks/DecksFilters';
import { DecksTable } from '@/widgets/decks/DecksTable';

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
