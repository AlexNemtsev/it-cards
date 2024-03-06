import { CheckedMark } from '@/components/ui/checkbox/CheckedMark';
import * as Checkbox from '@radix-ui/react-checkbox';

import s from './CheckboxWithText.module.scss';

type Props = {
  id?: string;
  text?: string;
} & Parameters<typeof Checkbox.Root>[0];
export const CheckboxWithText = (props: Props) => {
  const { checked, disabled, id, text } = props;

  const labelClassName = `${s.Label} ${disabled ? s.disabled : ''}`;

  return (
    <div className={s.CheckboxWrapper}>
      <label className={labelClassName} htmlFor={id}>
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
        {text}
      </label>
    </div>
  );
};
