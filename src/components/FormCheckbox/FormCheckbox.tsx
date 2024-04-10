import { FieldValues, UseControllerProps, useController } from 'react-hook-form';

import { Checkbox } from '@/components/ui/Checkbox';
import { CheckboxProps } from '@/components/ui/Checkbox/Checkbox';

type Props<T extends FieldValues> = UseControllerProps<T> &
  Omit<CheckboxProps, 'defaultValue' | 'icon' | 'onChange' | 'value'>;
export const FormCheckbox = <T extends FieldValues>(props: Props<T>) => {
  const { control, defaultValue, disabled, name } = props;

  const {
    field: { onChange, ref, value },
    // fieldState: { error },
  } = useController({
    control,
    defaultValue,
    name,
  });

  return (
    <Checkbox
      checked={value}
      disabled={disabled}
      name={name}
      onCheckedChange={onChange}
      ref={ref}
    />
  );
};
