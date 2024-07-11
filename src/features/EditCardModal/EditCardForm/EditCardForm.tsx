import { useForm } from 'react-hook-form';

import { Card } from '@/entities/card/types';
import { InputWithController } from '@/shared/ui/InputWithController';
import { CloseModalButton } from '@/shared/ui/Modal';
import { Typography } from '@/shared/ui/Typography';
import { UploadButtonWithController } from '@/shared/ui/UploadButtonWithController/UploadButtonWithController';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import s from './EditCardForm.module.scss';

const UpdateCardScheme = z.object({
  answer: z.string().min(3),
  answerImg: z.any().optional(),
  question: z.string().min(3),
  questionImg: z.any().optional(),
});

export type EditCardFormValues = z.infer<typeof UpdateCardScheme>;

type Props = {
  card: Card;
  onSubmit: (data: EditCardFormValues) => void;
};

export const EditCardForm = (props: Props) => {
  const { card, onSubmit } = props;

  const { control, handleSubmit, reset, resetField } = useForm<EditCardFormValues>({
    defaultValues: {
      answer: card?.answer,
      answerImg: '',
      question: card?.question,
      questionImg: '',
    },
    resolver: zodResolver(UpdateCardScheme),
  });

  const onSubmitUpdateCard = handleSubmit(data => {
    onSubmit(data);
  });

  return (
    <form>
      <Typography.Subtitle2 className={s.subtitle}>Question:</Typography.Subtitle2>
      <InputWithController
        autoFocus
        containerClassName={s.input}
        control={control}
        label="Question?"
        name="question"
        placeholder="Your question"
      />

      <UploadButtonWithController
        className={s.uploadButton}
        clear={() => resetField('questionImg')}
        control={control}
        name="questionImg"
        previewFromServer={card.questionImg}
        title="Change image"
      />

      <Typography.Subtitle2 className={s.subtitle}>Answer:</Typography.Subtitle2>

      <InputWithController
        containerClassName={s.input}
        control={control}
        label="Answer?"
        name="answer"
        placeholder="Your answer"
      />

      <UploadButtonWithController
        className={s.uploadButton}
        clear={() => resetField('answerImg')}
        control={control}
        name="answerImg"
        previewFromServer={card.answerImg}
        title="Change image"
      />

      <div className={s.buttonWrapper}>
        <CloseModalButton onClick={() => reset()} type="reset" variant="secondary">
          Cancel
        </CloseModalButton>
        <CloseModalButton
          className={s.newDeckButton}
          onClick={() => onSubmitUpdateCard()}
          type="submit"
        >
          Update Card
        </CloseModalButton>
      </div>
    </form>
  );
};
