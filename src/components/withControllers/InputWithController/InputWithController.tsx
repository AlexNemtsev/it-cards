import { Control, FieldPath, FieldValues, useController } from 'react-hook-form';

import { Input, InputProps } from '@/components/ui/Input';

export type ControlledTextFieldProps<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
} & Omit<InputProps, 'id' | 'onChange' | 'value'>;

export const InputWithController = <T extends FieldValues>(props: ControlledTextFieldProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    control: props.control,
    name: props.name,
  });

  return <Input {...props} {...field} error={error?.message} />;
};
