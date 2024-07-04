import { ChangeEvent, ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from 'react';

import { FileIcon } from '@/shared/assets/icons/FileIcon/FileIcon';
import { Button } from '@/shared/ui/Button';
import { ImageContainerWithDeleteButton } from '@/shared/ui/ImageContainerWithDeleteButton/ImageContainerWithDeleteButton';
import { Typography } from '@/shared/ui/Typography';
import { clsx } from 'clsx';

import s from './UploadButton.module.scss';

export type UploadButtonProps = {
  className?: string;
  onChange?: (file: File) => void;
  setImage?: (file: File) => void;
} & ComponentPropsWithoutRef<'input'>;

export const UploadButton = forwardRef<ElementRef<'input'>, UploadButtonProps>(
  (props: UploadButtonProps, ref) => {
    const { className, onChange, setImage, value, ...rest } = props;
    const classNames = clsx(s.uploadButton, className);
    const [cover, setCover] = useState<File | null>(null);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length) {
        const file = e.target.files[0];

        setCover(file);
        setImage?.(file);
        onChange?.(file);
      }
    };

    return (
      <>
        {cover && (
          <ImageContainerWithDeleteButton clearCover={() => setCover(null)} image={cover} />
        )}
        <label className={s.uploadButtonLabel}>
          <Button as="label" className={classNames} fullWidth variant="secondary">
            <input
              accept="image/jpeg, image/png, image/gif"
              className={s.input}
              onChange={onChangeHandler}
              {...rest}
              ref={ref}
              type="file"
            />
            <FileIcon />
            <Typography.Subtitle2>Change Image</Typography.Subtitle2>
          </Button>
        </label>
      </>
    );
  }
);