import { useGetDecksQuery } from '@/entities/deck/model/api';

export const MainPage = () => {
  const result = useGetDecksQuery();

  console.log(result);

  return <div>MainPage</div>;
};
