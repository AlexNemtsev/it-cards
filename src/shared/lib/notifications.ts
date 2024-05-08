import { toast } from 'react-toastify';

export const errorNotifications: typeof toast.error = (...args) => {
  return toast.error(...args);
};

export const successNotification: typeof toast.success = (...args) => {
  return toast.success(...args);
};
