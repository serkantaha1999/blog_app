import React, {createContext, FC, ReactNode, useContext, useState} from 'react';
import {adminPanelAPI, ArticleAPI, Articles, articlesAPI} from '../../app/api/api';

const initialState = {
  articles: [],
  limit: 0,
};

export interface ArticlesData extends ArticleAPI {}

interface Article {
    image: FileList |  null;
    title: string
    content: string
}

interface ArticlesContextState {
    data: ArticlesData
    fetchArticles: (currentPage: number, pageSize: number) => Promise<void>;
    deleteArticle: (id: number) => Promise<void>;
    addArticle: (item: Article) => Promise<void>;
    updateArticle: (id: number, article: Articles) => Promise<void>;
    isLoading: boolean
}

const defaultArticlesContextState: ArticlesContextState = {
    data: initialState,
    isLoading: true,
    fetchArticles: async () => {},
    addArticle: async () => {},
    updateArticle: async () => {},
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
            alert("Something went wrong! Please try again!")
        }
    }
    const addArticle = async (item: Article) => {
        try {
           let response = await adminPanelAPI.addArticle(item);
            if (response.status === 200) {
                alert("Successfully added!")
                // setData(prevState => ({
                //     ...prevState,
                //     articles: [...prevState.articles, article],
                //     limit: prevState.limit + 1
                // }))
            }
        } catch (err) {
            console.log(err)
            alert("Something went wrong! Please try again!")
        }
    }
    const updateArticle = async (id: number, article: Articles) => {
        try {
            let response = await  adminPanelAPI.updateArticle(id, article);
            if (response.status === 200) {
                alert("Successfully updated!")
                setData(prevState => {
                    const updatedArticles = prevState.articles.map(item => {
                        if (item.id === id) {
                            return { ...item, ...article };
                        }
                        return item;
                    });
                    return { ...prevState, articles: updatedArticles };
                });
            }
        } catch (err) {
            console.log(err)
            alert("Something went wrong! Please try again!")
        }
    }
    return (
        <ArticlesContext.Provider value={{isLoading, data, fetchArticles, deleteArticle, addArticle, updateArticle }}>
            {children}
        </ArticlesContext.Provider>
    );
};
