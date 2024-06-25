import { useState } from 'react';

export const useAddNewCardModal = () => {
  const [open, setOpen] = useState(false);
  const [answerImg, setAnswerImg] = useState<File | null>(null);
  const [questionImg, setQuestionImg] = useState<File | null>(null);

  return {
    answerImg,
    open,
    questionImg,
    setAnswerImg,
    setOpen,
    setQuestionImg,
  };
};
