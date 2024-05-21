import {ArticleAPI, articlesAPI} from '../../app/api/api';
import {useEffect, useState} from 'react';

export interface ArticlesData extends ArticleAPI {}

const initialState = {
    articles: [],
    limit: 0,
}
export const useArticles = (currentPage: number, pageSize: number) => {
    const [data, setData] = useState<ArticlesData>(initialState);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function fetchArticles() {
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
        fetchArticles();
    }, [currentPage]);

    return { data, isLoading };
}