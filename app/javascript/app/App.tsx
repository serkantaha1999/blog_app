import {Route, Routes} from 'react-router-dom';
import React from 'react';
import HomePage from '../pages/Home/HomePage';
import {ROUTES} from './router/router-config';
import AdminPanelPage from '../pages/AdminPanelPage';
import ArticlePage from '../pages/ArticlePage';
import MainLayout from "../layout/MainLayout";

export const App = () => {
   return (
       <Routes>
           <Route element={<MainLayout/>} path={ROUTES.layout}>
               <Route element={<HomePage/>} index/>
               <Route element={<AdminPanelPage/>} path={ROUTES.adminPanel}/>
               <Route element={<ArticlePage/>} path={ROUTES.article}/>
           </Route>
       </Routes>
   )
};
