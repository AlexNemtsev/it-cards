import { CheckboxRadix } from '@/components/ui/checkbox';
import { CheckedCross } from '@/components/ui/checkbox/CheckedCross';
import { CheckedMark } from '@/components/ui/checkbox/CheckedMark';
import { Checkbox } from '@radix-ui/react-checkbox';

export const App = () => {
  return (
    <div>
      <CheckedMark />
      <CheckedCross />
      Hello
      <Checkbox checked id={'123'} />
      <CheckboxRadix icon={<CheckedCross />} />
      <CheckboxRadix icon={<CheckedMark />}>3254345</CheckboxRadix>
    </div>
  );
};
