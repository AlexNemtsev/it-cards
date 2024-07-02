import { AddNewCardFormValues } from '@/features/AddNewCardModal/NewCardForm/NewCardForm';

export const convertNewCardDataToFormData = (data: AddNewCardFormValues) => {
  const { answer, answerImg, question, questionImg } = data;

  const formData = new FormData();

  if (answerImg) {
    formData.append('answerImg', answerImg);
  }

  if (questionImg) {
    formData.append('questionImg', questionImg);
  }

  formData.append('answer', answer);
  formData.append('question', question);

  return formData;
};
