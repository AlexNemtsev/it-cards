import { FieldValues, UseControllerProps, useController } from 'react-hook-form';

import { UploadButton, UploadButtonProps } from '@/pages/DeckPage/ui/UploadButton/UploadButton';

type Props<T extends FieldValues> = Omit<UploadButtonProps, 'onChange' | 'value'> &
  UseControllerProps<T>;

export const UploadButtonWithController = <T extends FieldValues>(props: Props<T>) => {
  const { control, name, ...rest } = props;
  const { field } = useController({
    control,
    name,
  });

  return <UploadButton {...rest} {...field} />;
};
