import {Route, Routes} from 'react-router-dom';
import React from 'react';
import HomePage from '../pages/Home/HomePage';
import {ROUTES} from './router/router-config';
import AdminPanelPage from '../pages/AdminPanelPage';
import ArticleCardPage from '../pages/ArticleCard/ArticleCardPage';
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login/Login";

export const App = () => {
   return (
       <Routes>
           <Route element={<MainLayout/>} path={ROUTES.layout}>
               <Route element={<Login/>} index/>
               <Route element={<AdminPanelPage/>} path={ROUTES.adminPanel}/>
               <Route element={<ArticleCardPage/>} path={ROUTES.articleById(null)}/>
           </Route>
       </Routes>
   )
};
