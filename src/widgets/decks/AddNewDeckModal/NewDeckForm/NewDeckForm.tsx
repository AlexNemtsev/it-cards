import { useForm } from 'react-hook-form';

import { CheckboxWithController } from '@/components/withControllers/CheckboxWithController';
import { InputWithController } from '@/components/withControllers/InputWithController';
import { File } from '@/shared/assets/icons/File/File';
import { Button } from '@/shared/ui/Button';
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
  onSubmit: (data: Omit<NewDeckFormValues, 'passwordConfirmation'>) => void;
};

export const NewDeckForm = (props: Props) => {
  const { onSubmit } = props;
  const { control, handleSubmit, register, reset } = useForm<NewDeckFormValues>({
    defaultValues: {
      file: null,
      pack: '',
      private: true,
    },
    mode: 'onSubmit',
    resolver: zodResolver(NewDeckFormSchema),
  });

  const onSubmitNewDeck = handleSubmit(data => {
    onSubmit(data);
  });

  return (
    <form className={s.form}>
      <InputWithController
        containerClassName={s.input}
        control={control}
        label="Name pack"
        name="pack"
      />
      <label className={s.uploadButton}>
        <input
          accept="image/jpeg, image/png, image/gif"
          className={s.uploadInput}
          {...register('file')}
          type="file"
        />
        <span className={s.file}>
          <File /> Upload Image
        </span>
      </label>
      <CheckboxWithController
        className={s.checkbox}
        control={control}
        defaultChecked
        label="Private pack"
        name="private"
      />
      <div className={s.buttons}>
        <Button className={s.cancelButton} onClick={() => reset()} type="reset" variant="secondary">
          Cancel
        </Button>
        <Button className={s.newDeckButton} onClick={onSubmitNewDeck} type="submit">
          Add New Pack
        </Button>
      </div>
    </form>
  );
};
