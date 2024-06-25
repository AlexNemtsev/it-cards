import { useState } from 'react';

import { Nullable } from '@/entities/card/api/types';

export const useAddNewCardModal = () => {
  const [open, setOpen] = useState(false);
  const [answerImg, setAnswerImg] = useState<Nullable<File>>(null);
  const [questionImg, setQuestionImg] = useState<Nullable<File>>(null);

  return {
    answerImg,
    open,
    questionImg,
    setAnswerImg,
    setOpen,
    setQuestionImg,
  };
};
