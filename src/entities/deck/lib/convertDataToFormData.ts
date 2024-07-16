type args = {
  file?: File;
  pack: string;
  private?: boolean;
};

export const convertDataToFormData = ({ file, pack, private: isPrivate }: args) => {
  const formData = new FormData();

  if (file) {
    formData.append('cover', file);
  }

  formData.append('name', pack);
  formData.append('isPrivate', `${isPrivate}`);

  return formData;
};
