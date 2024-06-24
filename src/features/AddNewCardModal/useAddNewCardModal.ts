import { ChangeEvent, useState } from 'react';

export const useAddNewCardModal = () => {
  const [open, setOpen] = useState(false);
  const [answerImg, setAnswerImg] = useState<File | null>(null);
  const [questionImg, setQuestionImg] = useState<File | null>(null);

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

  return {
    answerImg,
    open,
    questionImg,
    setAnswerImg,
    setOpen,
    setQuestionImg,
    uploadAnswerImageHandler,
    uploadQuestionImageHandler,
  };
};
