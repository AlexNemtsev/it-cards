import { Close } from '@radix-ui/react-dialog';

export const ButtonModal = () => {
  return (
    <div>
      <Close asChild>
        <button>Close</button>
      </Close>
    </div>
  );
};
