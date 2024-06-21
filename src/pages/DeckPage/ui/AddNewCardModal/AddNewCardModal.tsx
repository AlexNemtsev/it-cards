import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';

import { CreateCardRequest } from '@/entities/card/api/types';
import { AddNewCardModalTitle } from '@/pages/DeckPage/ui/AddNewCardModal/ui/AddNewCardModalTitle';
import { FileIcon } from '@/shared/assets/icons/FileIcon/FileIcon';
import { Button } from '@/shared/ui/Button';
import { ImageContainerWithDeleteButton } from '@/shared/ui/ImageContainerWithDeleteButton/ImageContainerWithDeleteButton';
import { InputWithController } from '@/shared/ui/InputWithController';
import { Modal } from '@/shared/ui/Modal';
import { Typography } from '@/shared/ui/Typography';
import { zodResolver } from '@hookform/resolvers/zod';
import { Close } from '@radix-ui/react-dialog';
import { z } from 'zod';

import s from './AddNewCardModal.module.scss';

const AddNewCardScheme = z.object({
  answer: z.string().min(3),
  question: z.string().min(3),
});

export type AddNewCardFormValues = z.infer<typeof AddNewCardScheme>;

type Props = {
  onCreateCard: (data: CreateCardRequest) => void;
};
export const AddNewCardModal = ({ onCreateCard }: Props) => {
  const { control, handleSubmit, reset } = useForm<AddNewCardFormValues>({
    defaultValues: {
      answer: '',
      question: '',
    },
    resolver: zodResolver(AddNewCardScheme),
  });

  const [open, setOpen] = useState(false);
  const [answerImg, setAnswerImg] = useState<File | null>(null);
  const [questionImg, setQuestionImg] = useState<File | null>(null);

  const onSubmitCreateCard = (data: AddNewCardFormValues) => {
    onCreateCard({ ...data, answerImg, questionImg });
    setOpen(false);
    setAnswerImg(null);
    setQuestionImg(null);
    reset();
  };
  const uploadQuestionImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0];

      setQuestionImg(file);
    }
  };
  const uploadAnswerImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0];

      setAnswerImg(file);
    }
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

        {questionImg && (
          <ImageContainerWithDeleteButton
            className={s.imageContainer}
            clearCover={() => setQuestionImg(null)}
            image={questionImg}
          />
        )}

        <Button as="label" className={s.uploadButton} fullWidth variant="secondary">
          <input
            accept="image/jpeg, image/png, image/gif"
            className={s.uploadInput}
            onChange={uploadQuestionImageHandler}
            type="file"
          />
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

        {answerImg && (
          <ImageContainerWithDeleteButton
            className={s.imageContainer}
            clearCover={() => setAnswerImg(null)}
            image={answerImg}
          />
        )}

        <Button as="label" className={s.uploadButton} fullWidth variant="secondary">
          <input
            accept="image/jpeg, image/png, image/gif"
            className={s.uploadInput}
            onChange={uploadAnswerImageHandler}
            type="file"
          />
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
