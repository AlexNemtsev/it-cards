import { Control, FieldPath, FieldValues, useController } from 'react-hook-form';

import { Input } from '@/components/ui/Input';

import { InputProps } from '../ui/Input/Input';

export type ControlledTextFieldProps<TFieldValues extends FieldValues> = {
  control: Control<TFieldValues>;
  name: FieldPath<TFieldValues>;
} & Omit<InputProps, 'id' | 'onChange' | 'value'>;

export const InputWithController = <TFieldValues extends FieldValues>(
  props: ControlledTextFieldProps<TFieldValues>
) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    control: props.control,
    name: props.name,
  });

  return <Input {...props} {...field} error={error?.message} />;
};
