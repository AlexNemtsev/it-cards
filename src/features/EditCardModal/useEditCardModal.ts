import { ChangeEvent, useState } from 'react';

import { useUpdateCardMutation } from '@/entities/card/api/cardApi';
import { Card } from '@/entities/card/api/types';
import { EditCardFormValues } from '@/features/EditCardModal/EditCardModal';

export const useEditCardModal = (card: Card) => {
  const [updateCard] = useUpdateCardMutation();

  const [open, setOpen] = useState(false);
  const [answerImg, setAnswerImg] = useState<File | null>(null);
  const [questionImg, setQuestionImg] = useState<File | null>(null);

  const showAnswerImgPreview = Boolean(card.answerImg && !answerImg);
  const showQuestionImgPreview = Boolean(card.questionImg && !questionImg);

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

  const onSubmitUpdateCard = (data: EditCardFormValues) => {
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
    const args: { formData: FormData; id: string } = { formData, id: card.id };

    setOpen(false);
    updateCard(args);
  };

  return {
    answerImg,
    onSubmitUpdateCard,
    open,
    questionImg,
    setAnswerImg,
    setOpen,
    setQuestionImg,
    showAnswerImgPreview,
    showQuestionImgPreview,
    uploadAnswerImageHandler,
    uploadQuestionImageHandler,
  };
};
