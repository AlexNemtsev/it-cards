import { FieldValues, UseControllerProps, useController } from 'react-hook-form';

import { Checkbox } from '@/components/ui/Checkbox';
import { CheckboxProps } from '@/components/ui/Checkbox/Checkbox';

type Props<T extends FieldValues> = UseControllerProps<T> &
  Omit<CheckboxProps, 'defaultValue' | 'icon' | 'onChange' | 'value'>;
export const FormCheckbox = <T extends FieldValues>(props: Props<T>) => {
  const { className, control, defaultValue, disabled, name } = props;

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
      className={className}
      disabled={disabled}
      label="Remember me"
      name={name}
      onCheckedChange={onChange}
      ref={ref}
    />
  );
};
