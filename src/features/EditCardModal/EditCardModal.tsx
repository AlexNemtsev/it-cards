import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useUpdateCardMutation } from '@/entities/card/api/cardApi';
import { Card, CreateCardRequest } from '@/entities/card/api/types';
import { EditCardModalTitle } from '@/features/EditCardModal/ui/EditCardModalTitle';
import { Edit } from '@/shared/assets/icons/Edit';
import { FileIcon } from '@/shared/assets/icons/FileIcon/FileIcon';
import { Button } from '@/shared/ui/Button';
import { ImageContainerWithDeleteButton } from '@/shared/ui/ImageContainerWithDeleteButton/ImageContainerWithDeleteButton';
import { InputWithController } from '@/shared/ui/InputWithController';
import { Modal } from '@/shared/ui/Modal';
import { Typography } from '@/shared/ui/Typography';
import { zodResolver } from '@hookform/resolvers/zod';
import { Close } from '@radix-ui/react-dialog';
import { z } from 'zod';

import s from './EditCardModal.module.scss';

const UpdateCardScheme = z.object({
  answer: z.string().min(3),
  question: z.string().min(3),
});

export type EditCardFormValues = z.infer<typeof UpdateCardScheme>;

type Props = {
  card: Card;
};
export const EditCardModal = ({ card }: Props) => {
  const [updateCard] = useUpdateCardMutation();
  // const {data} = useUpdateCardMutation();

  const { control, handleSubmit } = useForm<EditCardFormValues>({
    defaultValues: {
      answer: card?.answer,
      question: card?.question,
    },
    resolver: zodResolver(UpdateCardScheme),
  });

  const [open, setOpen] = useState(false);
  const [answerImg, setAnswerImg] = useState<File | null | string>(card.answerImg);
  const [questionImg, setQuestionImg] = useState<File | null | string>(card.questionImg);

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

  const onSubmitUpdateCard = (data: CreateCardRequest) => {
    const args: { id: string } & CreateCardRequest = { ...data, id: card.id };

    setOpen(false);
    updateCard(args);
  };

  return (
    <Modal
      className={s.content}
      onOpenChange={setOpen}
      open={open}
      title={<EditCardModalTitle />}
      trigger={
        <button className={s.cardButton}>
          <Edit />
        </button>
      }
    >
      <form onSubmit={handleSubmit(onSubmitUpdateCard)}>
        <Typography.Subtitle2 className={s.subtitle}>Question:</Typography.Subtitle2>
        <InputWithController
          autoFocus
          containerClassName={s.input}
          control={control}
          label="Question?"
          name="question"
          placeholder="Your question"
        />

        <ImageContainerWithDeleteButton
          className={s.imageContainer}
          clearCover={() => setQuestionImg(null)}
          image={questionImg}
        />

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

        <ImageContainerWithDeleteButton
          className={s.imageContainer}
          clearCover={() => setAnswerImg(null)}
          image={answerImg}
        />

        {/*{card.questionImg ? (*/}
        {/*  <img alt="question" className={s.imageContainer} src={card.questionImg} />*/}
        {/*) : (*/}
        {/*  <ImageContainerWithDeleteButton*/}
        {/*    className={s.imageContainer}*/}
        {/*    clearCover={() => setAnswerImg(null)}*/}
        {/*    image={answerImg}*/}
        {/*  />*/}
        {/*)}*/}

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
            Update Card
            <Close asChild></Close>
          </Button>
        </div>
      </form>
    </Modal>
  );
};
