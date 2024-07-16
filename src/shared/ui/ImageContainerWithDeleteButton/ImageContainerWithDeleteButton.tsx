import { ComponentPropsWithoutRef } from 'react';

import { Cross } from '@/shared/assets/icons/Cross';
import { clsx } from 'clsx';

import s from './ImageContainerWithDeleteButton.module.scss';

type Props = {
  clearCover: () => void;
  image?: File | string;
} & ComponentPropsWithoutRef<'div'>;

export const ImageContainerWithDeleteButton = (props: Props) => {
  const { className, clearCover, image, ...restProps } = props;

  const classNames = clsx(className, s.container);

  let newPreview;

  if (typeof image === 'string') {
    newPreview = image;
  } else {
    newPreview = URL.createObjectURL(image as File);
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
