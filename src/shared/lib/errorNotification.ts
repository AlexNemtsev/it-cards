import { toast } from 'react-toastify';

export const errorNotification: typeof toast.error = (...args) => {
  return toast.error(...args);
};
