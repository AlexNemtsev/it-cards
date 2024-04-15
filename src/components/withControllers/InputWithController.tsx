import { Control, FieldPath, FieldValues, useController } from 'react-hook-form';

import { Input } from '@/components/ui/Input';

import { InputProps } from '../ui/Input/Input';

export type ControlledTextFieldProps<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
} & Omit<InputProps, 'id' | 'onChange' | 'value'>;

export const InputWithController = <T extends FieldValues>(props: ControlledTextFieldProps<T>) => {
  const {
    field: { onChange, ref },
    fieldState: { error },
  } = useController({
    control: props.control,
    name: props.name,
  });

  return <Input {...props} error={error?.message} onChange={onChange} ref={ref} />;
};
