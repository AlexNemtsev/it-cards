import { useGetDecksQuery } from '@/entities/deck/api/api';

export const MainPage = () => {
  const result = useGetDecksQuery();

  console.log(result);

  return <div>MainPage</div>;
};
