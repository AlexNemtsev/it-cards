import { useForm } from 'react-hook-form';

import { AddNewCardModalTitle } from '@/pages/DeckPage/ui/AddNewCardModal/ui/AddNewCardModalTitle';
import { FileIcon } from '@/shared/assets/icons/FileIcon/FileIcon';
import { Button } from '@/shared/ui/Button';
import { InputWithController } from '@/shared/ui/InputWithController';
import { Modal } from '@/shared/ui/Modal';
import { Typography } from '@/shared/ui/Typography';
import { zodResolver } from '@hookform/resolvers/zod';
import { Close } from '@radix-ui/react-dialog';
import { z } from 'zod';

import s from './AddNewCardModal.module.scss';

const AddNewCardScheme = z.object({
  answer: z.string().min(3),
  answerImg: z.union([z.instanceof(File), z.null()]).optional(),
  answerVideo: z.union([z.instanceof(File), z.null()]).optional(),
  question: z.string().min(3),
  questionImg: z.union([z.instanceof(File), z.null()]).optional(),
  questionVideo: z.union([z.instanceof(File), z.null()]).optional(),
});

export type AddNewCardFormValues = z.infer<typeof AddNewCardScheme>;

type Props = {
  onSubmit: (data: AddNewCardFormValues) => void;
};
export const AddNewCardModal = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useForm<AddNewCardFormValues>({
    defaultValues: {
      answer: '',
      answerImg: null,
      answerVideo: null,
      question: '',
      questionImg: null,
      questionVideo: null,
    },
    resolver: zodResolver(AddNewCardScheme),
  });

  return (
    <Modal
      className={s.content}
      title={<AddNewCardModalTitle />}
      trigger={<Button>Add New Card</Button>}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography.Subtitle2 className={s.subtitle}>Question:</Typography.Subtitle2>

        <InputWithController
          autoFocus
          containerClassName={s.input}
          control={control}
          label="Question?"
          name="question"
          placeholder="Your question"
        />

        <Button className={s.uploadButton} fullWidth variant="secondary">
          <FileIcon />
          <Typography.Subtitle2>Change Image</Typography.Subtitle2>
        </Button>

        <Typography.Subtitle2 className={s.subtitle}>Answer:</Typography.Subtitle2>

        <InputWithController
          containerClassName={s.input}
          control={control}
          label="Answer?"
          name="answer"
          placeholder="Your answer"
        />

        <Button className={s.uploadButton} fullWidth variant="secondary">
          <FileIcon />
          <Typography.Subtitle2>Change Image</Typography.Subtitle2>
        </Button>

        <div className={s.buttonWrapper}>
          <Close asChild>
            <Button variant="secondary">Cancel </Button>
          </Close>
          <Button type="submit"> Add New Card </Button>
        </div>
      </form>
    </Modal>
  );
};
