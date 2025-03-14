import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { RouterProvider } from 'react-router-dom';
import router from './routers/router.tsx';
import { PriceProvider } from './context/PriceContext.tsx';
createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PriceProvider>
      <RouterProvider router={router} />
    </PriceProvider>
  </React.StrictMode>,
);
