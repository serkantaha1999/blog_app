import {Route, Routes} from 'react-router-dom';
import React from 'react';
import HomePage from '../pages/Home/HomePage';
import {ROUTES} from './router/router-config';
import AdminPanelPage from '../pages/AdminPanel/AdminPanelPage';
import ArticleCardPage from '../pages/ArticleCard/ArticleCardPage';
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login/Login";
import {AuthProvider} from "../shared/context/AuthContext";
import {ArticlesProvider} from "../shared/context/ArticlesContext";
import ArticleAdmin from "../pages/ArticleAdmin/ArticleAdmin";

export const App = () => {

   return (
       <AuthProvider>
          <ArticlesProvider>
              <Routes>
                  <Route element={<MainLayout/>} path={ROUTES.layout}>
                      <Route element={<ArticleAdmin/>} index/>
                      <Route element={<AdminPanelPage/>} path={ROUTES.adminPanel}/>
                      <Route element={<Login/>} path={ROUTES.login}/>
                      <Route element={<ArticleCardPage/>} path={ROUTES.articleById(null)}/>
                  </Route>
              </Routes>
          </ArticlesProvider>
       </AuthProvider>
   )
};
