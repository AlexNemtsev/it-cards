import { useGetDecksQuery } from '@/entities/deck/model/api';

import s from './DecksPage.module.scss';

import { Button } from '../../shared/ui/Button';
import { Input } from '../../shared/ui/Input';
import { Slider } from '../../shared/ui/Slider';
import { TabSwitcher } from '../../shared/ui/TabSwitcher';
import { Typography } from '../../shared/ui/Typography';

const TabSwitcherStates = {
  ACTIVE: 'Active',
  DISABLED: 'Disabled',
  INACTIVE: 'Inactive',
};

export const DecksPage = () => {
  const result = useGetDecksQuery();

  console.log(result);

  return (
    <section className={s.section}>
      <div className={s.header}>
        <Typography.H1>Decks List</Typography.H1>
        <Button>Add new Deck</Button>
      </div>
      <div className={s.filters}>
        <Input placeholder="Input search" type="search" />
        <TabSwitcher
          className={s.tabs}
          tabOptions={[
            {
              label: 'My Cards',
              value: 'My Cards',
            },
            {
              label: 'All Cards',
              value: 'All Cards',
            },
          ]}
        />
        <Slider defaultValue={[1, 100]} max={10000} min={1} />
      </div>
    </section>
  );
};
