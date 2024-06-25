import { useForm } from 'react-hook-form';

import { useCreateCardMutation } from '@/entities/card/api/cardApi';
import { CreateCardQueryArgs } from '@/entities/card/api/types';
import { AddNewCardModalTitle } from '@/features/AddNewCardModal/ui/AddNewCardModalTitle';
import { useAddNewCardModal } from '@/features/AddNewCardModal/useAddNewCardModal';
import { UploadButton } from '@/pages/DeckPage/ui/UploadButton/UploadButton';
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
  deckId: string;
};
export const AddNewCardModal = (props: Props) => {
  const { deckId } = props;
  const { answerImg, open, questionImg, setAnswerImg, setOpen, setQuestionImg } =
    useAddNewCardModal();

  const { control, handleSubmit, reset } = useForm<AddNewCardFormValues>({
    defaultValues: {
      answer: '',
      question: '',
    },
    resolver: zodResolver(AddNewCardScheme),
  });

  const [createCard] = useCreateCardMutation();

  const onSubmitCreateCard = (data: AddNewCardFormValues) => {
    const { answer, question } = data;

    const formData = new FormData();

    if (answerImg) {
      formData.append('answerImg', answerImg);
    }

    if (questionImg) {
      formData.append('questionImg', questionImg);
    }

    formData.append('answer', answer);
    formData.append('question', question);
    const args: CreateCardQueryArgs = { deckId, formData };

    createCard(args);

    setOpen(false);
    setAnswerImg(null);
    setQuestionImg(null);
    reset();
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

        <UploadButton className={s.uploadButton} setImage={setQuestionImg} />

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

        <UploadButton className={s.uploadButton} setImage={setAnswerImg} />

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
