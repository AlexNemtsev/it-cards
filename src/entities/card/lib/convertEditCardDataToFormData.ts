export type args = {
  answer: string;
  answerImg?: File;
  question: string;
  questionImg?: File;
};

export const convertEditCardDataToFormData = (data: args) => {
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
