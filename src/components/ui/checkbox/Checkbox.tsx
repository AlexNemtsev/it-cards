import { CheckedMark } from '@/components/ui/checkbox/CheckedMark';
import * as Checkbox from '@radix-ui/react-checkbox';

import s from './Checkbox.module.scss';

type Props = {
  id?: string;
} & Parameters<typeof Checkbox.Root>[0];
export const CheckboxRadix = (props: Props) => {
  const { checked, disabled, id } = props;

  return (
    <div className={s.CheckboxWrapper}>
      <Checkbox.Root
        className={`${s.CheckboxRoot}`}
        defaultChecked={checked}
        disabled={disabled}
        id={id}
      >
        <Checkbox.Indicator>
          <CheckedMark />
        </Checkbox.Indicator>
      </Checkbox.Root>
    </div>
  );
};
