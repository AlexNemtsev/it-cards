import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

import s from './checkbox.module.scss';

// type Props<T> = {} & ComponentPropsWithoutRef<T>;
export const CheckboxRadix = () => (
  <form>
    <div style={{ alignItems: 'center', display: 'flex' }}>
      <Checkbox.Root className={s.CheckboxRoot} defaultChecked id="c1">
        <Checkbox.Indicator className={s.CheckboxIndicator}>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className={s.Label} htmlFor="c1">
        Accept terms and conditions.
        {/*{props.children}*/}
      </label>
    </div>
  </form>
);
