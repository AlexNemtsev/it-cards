import { ComponentPropsWithoutRef } from 'react';

import { Cross } from '@/shared/assets/icons/Cross';
import { clsx } from 'clsx';

import s from './ImageContainerWithDeleteButton.module.scss';

type Props = {
  clearCover: () => void;
  // image: File | null;
  image: File | null;
} & ComponentPropsWithoutRef<'div'>;

export const ImageContainerWithDeleteButton = (props: Props) => {
  const { className, clearCover, image, ...restProps } = props;

  let newPreview;
  const classNames = clsx(className, s.container);

  if (image) {
    newPreview = URL.createObjectURL(image);
  }

  return newPreview ? (
    <div {...restProps} className={classNames}>
      <img alt="image" className={s.cover} src={newPreview} />
      <button className={s.clearButton} onClick={clearCover}>
        <Cross />
      </button>
    </div>
  ) : null;
};
