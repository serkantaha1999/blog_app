import React, {createContext, FC, ReactNode, useContext, useState} from 'react';
import {adminPanelAPI, articlesAPI} from '../../app/api/api';
import {ArticleAdmin, ArticleAPI} from '../../app/api/api-types';
import {UseFormReset} from "react-hook-form";
import {AdminFormType} from "../components/AdminForm/AdminForm";

const initialState = {
  articles: [],
  limit: 0,
};

export interface ArticlesData extends ArticleAPI {}

interface ArticlesContextState {
  data: ArticlesData;
  fetchArticles: (currentPage: number, pageSize: number) => Promise<void>;
  deleteArticle: (id: number) => Promise<void>;
  addArticle: (item: ArticleAdmin) => Promise<void>;
  updateArticle: (id: number, article: ArticleAdmin) => Promise<void>;
  isLoading: boolean;
}

const defaultArticlesContextState: ArticlesContextState = {
  data: initialState,
  isLoading: true,
  fetchArticles: async () => {},
  addArticle: async () => {},
  updateArticle: async () => {},
  deleteArticle: async () => {},
};

const ArticlesContext = createContext<ArticlesContextState>(defaultArticlesContextState);

export const useArticles = () => useContext(ArticlesContext);

export const ArticlesProvider: FC<{children: ReactNode}> = ({children}) => {
  const [data, setData] = useState<ArticlesData>(initialState);
  const [isLoading, setIsLoading] = useState(true);
  async function fetchArticles(currentPage: number, pageSize: number) {
    try {
      setIsLoading(true);
      let {data} = await articlesAPI.getArticles(currentPage, pageSize);
      setData(data);
      setIsLoading(false);
    } catch (err) {
      console.log('Error:', err);
      alert('Sorry, but some problem on server. Please, try again!');
    }
  }

  const deleteArticle = async (id: number) => {
    try {
      setIsLoading(true);
      let response = await adminPanelAPI.deleteArticle(id);
      if (response.status === 200) {
        alert('You deleted this articles!');
        setData((prevState) => ({
          ...prevState,
          articles: prevState.articles.filter((article) => article.id !== id),
          limit: prevState.limit - 1,
        }));
      }
      setIsLoading(true);
    } catch (err) {
      console.log(err);
      alert('Something went wrong! Please try again!');
    }
  };
  const addArticle = async (item: ArticleAdmin) => {
    try {
      let response = await adminPanelAPI.addArticle(item);
      if (response.status === 200) {
        alert('Successfully added!');
      }
    } catch (err) {
      console.log(err);
      alert('Something went wrong! Please try again!');
    }
  };
  const updateArticle = async (id: number, article: ArticleAdmin) => {
    try {
      console.log("a")
      let response = await adminPanelAPI.updateArticle(id, article);
      if (response.status === 200) {
        alert('Successfully updated!');
      }
    } catch (err) {
      console.log(err);
      alert('Something went wrong! Please try again!');
    }
  };
  return (
    <ArticlesContext.Provider value={{isLoading, data, fetchArticles, deleteArticle, addArticle, updateArticle}}>
      {children}
    </ArticlesContext.Provider>
  );
};
