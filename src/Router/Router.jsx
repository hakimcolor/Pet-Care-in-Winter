import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Services from '../Pages/Services';
import MyProfile from '../Pages/MyProfile';
import SingUp from '../Pages/SingUp';
import Singin from '../Pages/Singin';
import Loading from '../Pages/Loading';

import { lazy, Suspense } from 'react';
import PrivateRoute from './PriveteRouter'; 

const Home = lazy(() => import('../Pages/Home'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        loader: () => fetch('/Data.json').then((res) => res.json()),
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        element: <PrivateRoute />, 
        children: [
          {
            path: '/services',
            element: <Services />,
          },
          {
            path: '/profile',
            element: <MyProfile />, 
          },
        ],
      },
      {
        path: '/signup',
        element: <SingUp />,
      },
      {
        path: '/signin',
        element: <Singin />,
      },
    ],
  },
]);
