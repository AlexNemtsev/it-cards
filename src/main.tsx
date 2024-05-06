import React from 'react';
import { ToastContainer } from 'react-toastify';

import { AppWithProviders } from '@/app';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppWithProviders />
    <ToastContainer position="bottom-left" theme="dark" />
  </React.StrictMode>
);
