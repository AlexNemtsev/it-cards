import { FieldValues, UseControllerProps, useController } from 'react-hook-form';

import { Input, InputProps } from '@/components/ui/Input';

type Props<T extends FieldValues> = Omit<InputProps, 'onChange' | 'value'> & UseControllerProps<T>;

export const InputWithController = <T extends FieldValues>(props: Props<T>) => {
  const { control, name, ...rest } = props;
  const {
    field: { value, ...restField },
    fieldState: { error },
  } = useController({
    control,
    name,
  });

  return <Input {...rest} error={error?.message} {...restField} name={name} />;
};
