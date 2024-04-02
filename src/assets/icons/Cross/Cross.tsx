import { SVGProps } from 'react';

import s from './Cross.module.scss';

type Props = {
  height?: number;
  width?: number;
} & SVGProps<SVGSVGElement>;

export const Cross = (props: Props) => {
  const { className, height, width, ...otherProps } = props;

  return (
    <svg
      className={s.cross}
      style={{ height: height, width: width }}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path d="M8.94 7.99998L11.8067 5.13998C11.9322 5.01445 12.0027 4.84418 12.0027 4.66665C12.0027 4.48911 11.9322 4.31885 11.8067 4.19331C11.6811 4.06778 11.5109 3.99725 11.3333 3.99725C11.1558 3.99725 10.9855 4.06778 10.86 4.19331L8 7.05998L5.14 4.19331C5.01446 4.06778 4.8442 3.99725 4.66667 3.99725C4.48913 3.99725 4.31887 4.06778 4.19333 4.19331C4.0678 4.31885 3.99727 4.48911 3.99727 4.66665C3.99727 4.84418 4.0678 5.01445 4.19333 5.13998L7.06 7.99998L4.19333 10.86C4.13085 10.922 4.08125 10.9957 4.04741 11.0769C4.01356 11.1582 3.99613 11.2453 3.99613 11.3333C3.99613 11.4213 4.01356 11.5085 4.04741 11.5897C4.08125 11.6709 4.13085 11.7447 4.19333 11.8066C4.25531 11.8691 4.32904 11.9187 4.41028 11.9526C4.49152 11.9864 4.57866 12.0038 4.66667 12.0038C4.75467 12.0038 4.84181 11.9864 4.92305 11.9526C5.00429 11.9187 5.07802 11.8691 5.14 11.8066L8 8.93998L10.86 11.8066C10.922 11.8691 10.9957 11.9187 11.0769 11.9526C11.1582 11.9864 11.2453 12.0038 11.3333 12.0038C11.4213 12.0038 11.5085 11.9864 11.5897 11.9526C11.671 11.9187 11.7447 11.8691 11.8067 11.8066C11.8692 11.7447 11.9187 11.6709 11.9526 11.5897C11.9864 11.5085 12.0039 11.4213 12.0039 11.3333C12.0039 11.2453 11.9864 11.1582 11.9526 11.0769C11.9187 10.9957 11.8692 10.922 11.8067 10.86L8.94 7.99998Z" />
    </svg>
  );
};
