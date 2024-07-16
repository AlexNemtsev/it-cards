type args = {
  cover?: File;
  isPrivate?: boolean;
  name?: string;
};

export const convertEditFormDataToFormData = ({ cover, isPrivate, name }: args) => {
  const formData = new FormData();

  if (cover) {
    formData.append('cover', cover);
  }
  if (name) {
    formData.append('name', name);
  }
  if (isPrivate) {
    formData.append('isPrivate', `${isPrivate}`);
  }

  return formData;
};
