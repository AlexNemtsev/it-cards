import PrimitiveSelect from './components/ui/Select/PrimitiveSelect';
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
      <PrimitiveSelect
        ariaLabel="Select-box"
        labelValue="Select-box"
        placeholder="Select-box"
        selectItemValues={selectItemValues}
      />
    </div>
  );
};
