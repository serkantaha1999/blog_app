import {createBrowserRouter} from 'react-router-dom';

import {ROUTES} from './router-config';
import HomePage from '../../pages/HomePage/HomePage';
import ArticlePage from '../../pages/ArticlePage';
import AdminPanelPage from '../../pages/AdminPanelPage';
import MainLayout from '../../layout/MainLayout';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    path: ROUTES.layout,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.article,
        element: <ArticlePage />,
      },
      {
        path: ROUTES.adminPanel,
        element: <AdminPanelPage />,
      },
    ],
  },
]);
