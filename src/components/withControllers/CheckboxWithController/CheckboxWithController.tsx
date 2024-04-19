import { FieldValues, UseControllerProps, useController } from 'react-hook-form';

import { Checkbox, CheckboxProps } from '@/components/ui/Checkbox/Checkbox';

type Props<T extends FieldValues> = Omit<
  CheckboxProps,
  'defaultValue' | 'icon' | 'onChange' | 'value'
> &
  UseControllerProps<T>;
export const CheckboxWithController = <T extends FieldValues>(props: Props<T>) => {
  const { className, control, defaultValue, disabled, name } = props;

  const {
    field: { onChange, ref, value },
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
