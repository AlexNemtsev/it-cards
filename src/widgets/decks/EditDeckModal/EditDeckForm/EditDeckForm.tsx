import { useForm } from 'react-hook-form';

import { CheckboxWithController } from '@/shared/ui/CheckboxWithController';
import { InputWithController } from '@/shared/ui/InputWithController';
import { CloseModalButton } from '@/shared/ui/Modal';
import { UploadButtonWithController } from '@/shared/ui/UploadButtonWithController/UploadButtonWithController';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import s from './EditDeckForm.module.scss';

export const EditDeckFormSchema = z.object({
  cover: z.any().optional(),
  isPrivate: z.boolean().optional(),
  name: z.string(),
});

export type EditDeckFormValues = z.infer<typeof EditDeckFormSchema>;

type Props = {
  defaultCover: string;
  defaultIsPrivate: boolean;
  defaultName: string;
  onSubmit: (data: EditDeckFormValues) => void;
};

export const EditDeckForm = (props: Props) => {
  const { defaultCover, defaultIsPrivate, defaultName, onSubmit } = props;
  const { control, getValues, handleSubmit, reset } = useForm<EditDeckFormValues>({
    defaultValues: {
      cover: '',
      isPrivate: defaultIsPrivate || true,
      name: defaultName || '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(EditDeckFormSchema),
  });

  const onSubmitEditDeck = handleSubmit(onSubmit);

  return (
    <form className={s.form}>
      <InputWithController
        containerClassName={s.input}
        control={control}
        label="Name pack"
        name="name"
      />

      <UploadButtonWithController
        clear={() => reset({ ...getValues(), cover: '' })}
        control={control}
        defaultCover={defaultCover}
        name="cover"
      />
      <CheckboxWithController
        className={s.checkbox}
        control={control}
        label="Private pack"
        name="isPrivate"
      />
      <div className={s.buttons}>
        <CloseModalButton onClick={() => reset()} type="reset" variant="secondary">
          Cancel
        </CloseModalButton>
        <CloseModalButton onClick={() => onSubmitEditDeck()} type="submit">
          Edit Pack
        </CloseModalButton>
      </div>
    </form>
  );
};