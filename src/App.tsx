import { Select } from './components/ui/Select/Select';
import { SelectItemValue } from './components/ui/Select/Types';

const selectItemValues: SelectItemValue[] = [
  { id: 1, value: 'apple' },
  { id: 2, value: 'pea' },
  { id: 3, value: 'cocount' },
  { id: 4, value: 'banana' },
];

export const App = () => {
  return (
    <div>
      <Select
        ariaLabel="food"
        placeholder="Select a fruit!!!"
        selectItemValues={selectItemValues}
      />
    </div>
  );
};
