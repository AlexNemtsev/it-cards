import { Burger } from '@/assets/icons/Burger/Burger';
import { Dropdown } from '@/components/ui/Dropdown/Dropdown';

export const App = () => {
  return (
    <div>
      <span>Hello</span>
      <Dropdown icon={<Burger />} />
      <p>Hello</p>
    </div>
  );
};
