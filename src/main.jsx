import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { RouterProvider } from 'react-router-dom';

import { router } from './Router/Router.jsx';

import 'animate.css';

import AuthProvider from './Context/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      {' '}
      <RouterProvider router={router} /> <ToastContainer/>
    </AuthProvider>
  </StrictMode>
);
