import { useForm } from 'react-hook-form';

import { InputWithController } from '@/shared/ui/InputWithController';
import { CloseModalButton } from '@/shared/ui/Modal';
import { Typography } from '@/shared/ui/Typography';
import { UploadButtonWithController } from '@/shared/ui/UploadButtonWithController/UploadButtonWithController';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import s from './NewCardForm.module.scss';

export type AddNewCardFormValues = z.infer<typeof AddNewCardScheme>;

const AddNewCardScheme = z.object({
  answer: z.string().min(3),
  answerImg: z.instanceof(File).optional(),
  question: z.string().min(3),
  questionImg: z.instanceof(File).optional(),
});

type Props = {
  onSubmit: (data: AddNewCardFormValues) => void;
};

export const NewCardForm = (props: Props) => {
  const { onSubmit } = props;
  const { control, handleSubmit, reset, resetField } = useForm<AddNewCardFormValues>({
    defaultValues: {
      answer: '',
      answerImg: undefined,
      question: '',
      questionImg: undefined,
    },
    resolver: zodResolver(AddNewCardScheme),
  });

  const onSubmitNewCard = handleSubmit(onSubmit);

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
        clear={() => resetField('questionImg')}
        control={control}
        name="questionImg"
        title="Upload image "
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
        clear={() => resetField('answerImg')}
        control={control}
        name="answerImg"
        title="Upload image "
      />

      <div className={s.buttonWrapper}>
        <CloseModalButton onClick={() => reset()} type="reset" variant="secondary">
          Cancel
        </CloseModalButton>
        <CloseModalButton onClick={() => onSubmitNewCard()} type="submit">
          Add New Card
        </CloseModalButton>
      </div>
    </form>
  );
};
