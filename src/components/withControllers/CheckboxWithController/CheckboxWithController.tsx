import { FieldValues, UseControllerProps, useController } from 'react-hook-form';

import { Checkbox, CheckboxProps } from '@/shared/ui/Checkbox/Checkbox';

type Props<T extends FieldValues> = Omit<
  CheckboxProps,
  'defaultValue' | 'icon' | 'onChange' | 'value'
> &
  UseControllerProps<T>;
export const CheckboxWithController = <T extends FieldValues>(props: Props<T>) => {
  const { control, name, ...rest } = props;

  const {
    field: { onChange, ...field },
  } = useController({
    control,
    name,
  });

  return <Checkbox {...field} onCheckedChange={onChange} {...rest} />;
};
