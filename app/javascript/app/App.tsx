import {Route, Routes} from 'react-router-dom';
import React from 'react';
import HomePage from '../pages/components/Home/HomePage';
import {ROUTES} from './router/router-config';
import AdminPanelPage from '../pages/components/AdminPanel/AdminPanelPage';
import ArticleCardPage from '../pages/components/ArticleCard/ArticleCardPage';
import MainLayout from "../layout/MainLayout";
import LoginPage from "../pages/components/Login/LoginPage";
import {AuthProvider} from "../shared/context/AuthContext";
import {ArticlesProvider} from "../shared/context/ArticlesContext";
import AddArticlePage from "../pages/components/AddArticlePage/AddArticlePage";
import EditArticleAdminPage from "../pages/EditArticleAdmin/EditArticleAdminPage";

export const App = () => {

   return (
       <AuthProvider>
          <ArticlesProvider>
              <Routes>
                  <Route element={<MainLayout/>} path={ROUTES.layout}>
                      <Route element={<HomePage/>} index/>
                      <Route element={<AdminPanelPage/>} path={ROUTES.adminPanel}/>
                      <Route element={<LoginPage/>} path={ROUTES.login}/>
                      <Route element={<AddArticlePage/>} path={ROUTES.newArticles}/>
                      <Route element={<ArticleCardPage/>} path={ROUTES.articleById(null)}/>
                      <Route element={<EditArticleAdminPage/>} path={ROUTES.editArticleById(null)}/>
                  </Route>
              </Routes>
          </ArticlesProvider>
       </AuthProvider>
   )
};
