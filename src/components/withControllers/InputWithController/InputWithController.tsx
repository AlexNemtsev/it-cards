import { FieldValues, UseControllerProps, useController } from 'react-hook-form';

import { Input, InputProps } from '@/components/ui/Input';

type Props<T extends FieldValues> = Omit<InputProps, 'onChange' | 'value'> & UseControllerProps<T>;

export const InputWithController = <T extends FieldValues>(props: Props<T>) => {
  const { control, ...rest } = props;
  const {
    field,
    fieldState: { error },
  } = useController({
    control: control,
    name: rest.name,
  });

  return <Input {...rest} error={error?.message} {...field} />;
};
