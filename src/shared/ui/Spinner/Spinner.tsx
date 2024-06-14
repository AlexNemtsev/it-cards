import s from './Spinner.module.scss';
export const Spinner = () => {
  return (
    <div className={s.preloader}>
      <div className={s.circle}></div>
    </div>
  );
};
