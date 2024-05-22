import { FC } from 'react';
import { MemoryRouter } from 'react-router-dom';

export const RouterDecorator = (Story: FC) => {
  return (
    <MemoryRouter initialEntries={['/']}>
      <Story />
    </MemoryRouter>
  );
};
