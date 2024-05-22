import React, {createContext, FC, ReactNode, useContext, useState} from 'react';
import {adminPanelAPI, ArticleAPI, articlesAPI} from '../../app/api/api';

const initialState = {
  articles: [],
  limit: 0,
};

export interface ArticlesData extends ArticleAPI {}

interface ArticlesContextState {
    data: ArticlesData
    fetchArticles: (currentPage: number, pageSize: number) => Promise<void>;
    deleteArticle: (id: number) => Promise<void>;
    isLoading: boolean
}

const defaultArticlesContextState: ArticlesContextState = {
    data: initialState,
    isLoading: true,
    fetchArticles: async () => {},
    deleteArticle: async () => {}
};

const ArticlesContext = createContext<ArticlesContextState>(defaultArticlesContextState);

export const useArticles = () => useContext(ArticlesContext);

export const ArticlesProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [data, setData] = useState<ArticlesData>(initialState);
    const [isLoading, setIsLoading] = useState(true);
    async function fetchArticles(currentPage: number, pageSize: number) {
        try {
            setIsLoading(true);
            let { data } = await articlesAPI.getArticles(currentPage, pageSize);
            setData(data);
            setIsLoading(false);
        } catch (err) {
            console.log("Error:", err);
            alert("Sorry, but some problem on server. Please, try again!")
        }
    }

    const deleteArticle = async (id: number) => {
        try {
            setIsLoading(true)
            let response = await adminPanelAPI.deleteArticle(id);
            if (response.status === 200) {
                alert("You deleted this articles!")
                setData(prevState => ({
                    ...prevState,
                    articles: prevState.articles.filter(article => article.id !== id),
                    limit: prevState.limit - 1,
                }))
            }
            setIsLoading(true)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <ArticlesContext.Provider value={{isLoading, data, fetchArticles, deleteArticle }}>
            {children}
        </ArticlesContext.Provider>
    );
};
