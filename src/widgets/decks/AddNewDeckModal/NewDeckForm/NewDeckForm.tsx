import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { CheckboxWithController } from '@/shared/ui/CheckboxWithController';
import { ImageContainerWithDeleteButton } from '@/shared/ui/ImageContainerWithDeleteButton/ImageContainerWithDeleteButton';
import { InputWithController } from '@/shared/ui/InputWithController';
import { ModalButton } from '@/shared/ui/Modal/ModalButton';
import { UploadButtonWithController } from '@/shared/ui/UploadButtonWithController/UploadButtonWithController';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import s from './NewDeckForm.module.scss';

export const NewDeckFormSchema = z.object({
  file: z.any().optional(),
  pack: z.string(),
  private: z.boolean().optional(),
});

export type NewDeckFormValues = z.infer<typeof NewDeckFormSchema>;

type Props = {
  onSubmit: (data: NewDeckFormValues) => void;
};

export const NewDeckForm = (props: Props) => {
  const { onSubmit } = props;
  const [cover, setCover] = useState<File | null>(null);
  const { control, handleSubmit, reset } = useForm<NewDeckFormValues>({
    defaultValues: {
      file: '',
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
      {cover && <ImageContainerWithDeleteButton clearCover={() => setCover(null)} image={cover} />}
      <label className={s.uploadButton}>
        <UploadButtonWithController
          control={control}
          name="file"
          setImage={(data: File) => setCover(data)}
        />
      </label>
      <CheckboxWithController
        className={s.checkbox}
        control={control}
        defaultChecked
        label="Private pack"
        name="private"
      />
      <div className={s.buttons}>
        <ModalButton
          className={s.cancelButton}
          onClick={() => reset()}
          type="reset"
          variant="secondary"
        >
          Cancel
        </ModalButton>
        <ModalButton className={s.newDeckButton} onClick={() => onSubmitNewDeck()} type="submit">
          Add New Pack
        </ModalButton>
      </div>
    </form>
  );
};
