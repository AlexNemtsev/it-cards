import { ChangeEvent } from 'react';

import { FileIcon } from '@/shared/assets/icons/FileIcon/FileIcon';
import { Button } from '@/shared/ui/Button';
import { Typography } from '@/shared/ui/Typography';
import { clsx } from 'clsx';

import s from './UploadButton.module.scss';

type Props = {
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const UploadButton = ({ className, onChange }: Props) => {
  const classNames = clsx(s.uploadButton, className);

  return (
    <Button as="label" className={classNames} fullWidth variant="secondary">
      <input
        accept="image/jpeg, image/png, image/gif"
        className={s.input}
        onChange={onChange}
        type="file"
      />
      <FileIcon />
      <Typography.Subtitle2>Change Image</Typography.Subtitle2>
    </Button>
  );
};

export default UploadButton;
