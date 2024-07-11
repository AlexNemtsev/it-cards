import { ChangeEvent, ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from 'react';

import { FileIcon } from '@/shared/assets/icons/FileIcon/FileIcon';
import { Button } from '@/shared/ui/Button';
import { ImageContainerWithDeleteButton } from '@/shared/ui/ImageContainerWithDeleteButton/ImageContainerWithDeleteButton';
import { Typography } from '@/shared/ui/Typography';
import { clsx } from 'clsx';

import s from './UploadButton.module.scss';

export type UploadButtonProps = {
  className?: string;
  clear: () => void;
  onChange?: (file: File | undefined) => void;
  previewFromServer?: string;
  title: string;
} & ComponentPropsWithoutRef<'input'>;

export const UploadButton = forwardRef<ElementRef<'input'>, UploadButtonProps>(
  (props: UploadButtonProps, ref) => {
    const { className, clear, onChange, previewFromServer, title, value, ...rest } = props;
    const classNames = clsx(s.uploadButton, className);
    const [preview, setPreview] = useState<File | string | undefined>(previewFromServer);

    const currentTitle = title === 'Change image' && previewFromServer ? title : 'Upload image';

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length) {
        const file = e.target.files[0];

        setPreview(file);
        onChange?.(file);
      }
      if (!preview && !e.target.files) {
        clear();
      }
    };

    const deleteCover = () => {
      clear();
      setPreview(undefined);
    };

    return (
      <>
        {preview && <ImageContainerWithDeleteButton clearCover={deleteCover} image={preview} />}
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
            <Typography.Subtitle2>{currentTitle}</Typography.Subtitle2>
          </Button>
        </label>
      </>
    );
  }
);
