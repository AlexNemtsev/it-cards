import { FieldValues, UseControllerProps, useController } from 'react-hook-form';

import { Input, InputProps } from '@/components/ui/Input';

type Props<T extends FieldValues> = Omit<InputProps, 'onChange' | 'value'> &
  Omit<UseControllerProps<T>, 'defaultValue' | 'disabled' | 'rules' | 'shouldUnregister'>;

export const InputWithController = <T extends FieldValues>(props: Props<T>) => {
  const { control, name, ...rest } = props;
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name,
  });

  return <Input error={error?.message} {...field} {...rest} />;
};
