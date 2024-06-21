import { useState } from 'react';
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
  // answerImg: z.union([z.instanceof(File), z.null()]).optional(),
  // answerVideo: z.union([z.instanceof(File), z.null()]).optional(),
  answerImg: z.string().optional(),
  answerVideo: z.string().optional(),
  question: z.string().min(3),
  questionImg: z.string().optional(),
  questionVideo: z.string().optional(),

  // questionImg: z.union([z.instanceof(File), z.null()]).optional(),
  // questionVideo: z.union([z.instanceof(File), z.null()]).optional(),
});

export type AddNewCardFormValues = z.infer<typeof AddNewCardScheme>;

type Props = {
  onCreateCard: (data: AddNewCardFormValues) => void;
};
export const AddNewCardModal = ({ onCreateCard }: Props) => {
  const { control, handleSubmit } = useForm<AddNewCardFormValues>({
    defaultValues: {
      answer: '',
      answerImg: '',
      answerVideo: '',
      question: '',
      questionImg: '',
      questionVideo: '',
    },
    resolver: zodResolver(AddNewCardScheme),
  });

  const [open, setOpen] = useState(false);

  const onSubmitCreateCard = (data: AddNewCardFormValues) => {
    onCreateCard(data);
    setOpen(false);
  };

  return (
    <Modal
      className={s.content}
      onOpenChange={setOpen}
      open={open}
      title={<AddNewCardModalTitle />}
      trigger={<Button>Add New Card</Button>}
    >
      <form onSubmit={handleSubmit(onSubmitCreateCard)}>
        <Typography.Subtitle2 className={s.subtitle}>Question:</Typography.Subtitle2>

        <InputWithController
          autoFocus
          containerClassName={s.input}
          control={control}
          label="Question?"
          name="question"
          placeholder="Your question"
        />

        <Button className={s.uploadButton} fullWidth type="button" variant="secondary">
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

        <Button className={s.uploadButton} fullWidth type="button" variant="secondary">
          <FileIcon />
          <Typography.Subtitle2>Change Image</Typography.Subtitle2>
        </Button>

        <div className={s.buttonWrapper}>
          <Close asChild>
            <Button variant="secondary">Cancel </Button>
          </Close>

          <Button type="submit">
            Add New Card
            <Close asChild></Close>
          </Button>
        </div>
      </form>
    </Modal>
  );
};
