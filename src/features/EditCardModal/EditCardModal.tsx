import { useForm } from 'react-hook-form';

import { Card } from '@/entities/card/types';
import { EditCardModalTitle } from '@/features/EditCardModal/ui/EditCardModalTitle';
import { useEditCardModal } from '@/features/EditCardModal/useEditCardModal';
import { Edit } from '@/shared/assets/icons/Edit';
import { Button } from '@/shared/ui/Button';
import { ImageContainerWithDeleteButton } from '@/shared/ui/ImageContainerWithDeleteButton/ImageContainerWithDeleteButton';
import { InputWithController } from '@/shared/ui/InputWithController';
import { Modal } from '@/shared/ui/Modal';
import { Typography } from '@/shared/ui/Typography';
import { UploadButton } from '@/shared/ui/UploadButton/UploadButton';
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
export const EditCardModal = (props: Props) => {
  const { card } = props;

  const {
    answerImg,
    onSubmitUpdateCard,
    open,
    questionImg,
    setAnswerImg,
    setOpen,
    setQuestionImg,
    showAnswerImgPreview,
    showQuestionImgPreview,
  } = useEditCardModal(card);

  const { control, handleSubmit } = useForm<EditCardFormValues>({
    defaultValues: {
      answer: card?.answer,
      question: card?.question,
    },
    resolver: zodResolver(UpdateCardScheme),
  });

  return (
    <Modal
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

        {showQuestionImgPreview && (
          <img alt="questionImg" className={s.cover} src={card.questionImg} />
        )}
        <ImageContainerWithDeleteButton
          className={s.imageContainer}
          clearCover={() => setQuestionImg(null)}
          image={questionImg}
        />

        <UploadButton className={s.uploadButton} setImage={setQuestionImg} />

        <Typography.Subtitle2 className={s.subtitle}>Answer:</Typography.Subtitle2>

        <InputWithController
          containerClassName={s.input}
          control={control}
          label="Answer?"
          name="answer"
          placeholder="Your answer"
        />
        {showAnswerImgPreview && <img alt="answerImg" className={s.cover} src={card.answerImg} />}

        <ImageContainerWithDeleteButton
          className={s.imageContainer}
          clearCover={() => setAnswerImg(null)}
          image={answerImg}
        />

        <UploadButton className={s.uploadButton} setImage={setAnswerImg} />

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
