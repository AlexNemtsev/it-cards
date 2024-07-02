import { NewDeckFormValues } from '@/widgets/decks/AddNewDeckModal/NewDeckForm/NewDeckForm';

export const convertDataToFormData = ({ file, pack, private: isPrivate }: NewDeckFormValues) => {
  const formData = new FormData();

  if (file) {
    formData.append('cover', file);
  }

  formData.append('name', pack);
  formData.append('isPrivate', `${isPrivate}`);

  return formData;
};
