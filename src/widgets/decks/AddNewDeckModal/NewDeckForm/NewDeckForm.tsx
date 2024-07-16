import { useForm } from 'react-hook-form';

import { CheckboxWithController } from '@/shared/ui/CheckboxWithController';
import { InputWithController } from '@/shared/ui/InputWithController';
import { CloseModalButton } from '@/shared/ui/Modal';
import { UploadButtonWithController } from '@/shared/ui/UploadButtonWithController/UploadButtonWithController';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import s from './NewDeckForm.module.scss';

export const NewDeckFormSchema = z.object({
  file: z.instanceof(File).optional(),
  pack: z.string(),
  private: z.boolean().optional(),
});

export type NewDeckFormValues = z.infer<typeof NewDeckFormSchema>;

type Props = {
  onSubmit: (data: NewDeckFormValues) => void;
};

export const NewDeckForm = (props: Props) => {
  const { onSubmit } = props;
  const { control, handleSubmit, reset, resetField } = useForm<NewDeckFormValues>({
    defaultValues: {
      file: undefined,
      pack: '',
      private: true,
    },
    mode: 'onSubmit',
    resolver: zodResolver(NewDeckFormSchema),
  });

  const onSubmitNewDeck = handleSubmit(onSubmit);

  return (
    <form className={s.form}>
      <InputWithController
        containerClassName={s.input}
        control={control}
        label="Name pack"
        name="pack"
      />
      <UploadButtonWithController
        clear={() => resetField('file')}
        control={control}
        name="file"
        title="Upload image"
      />
      <CheckboxWithController
        className={s.checkbox}
        control={control}
        defaultChecked
        label="Private pack"
        name="private"
      />
      <div className={s.buttons}>
        <CloseModalButton
          className={s.cancelButton}
          onClick={() => reset()}
          type="reset"
          variant="secondary"
        >
          Cancel
        </CloseModalButton>
        <CloseModalButton
          className={s.newDeckButton}
          onClick={() => onSubmitNewDeck()}
          type="submit"
        >
          Add New Pack
        </CloseModalButton>
      </div>
    </form>
  );
};
