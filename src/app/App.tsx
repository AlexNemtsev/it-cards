import { RouterProvider } from 'react-router-dom';

import { DecksPage } from '@/pages/DecksPage';

import './styles/index.scss';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';

import { router } from './router';

export const App = () => {
  // return <RouterProvider router={router} />;
  return <DecksPage />;
};
