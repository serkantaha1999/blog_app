import React, {useState} from 'react';
import {ArticleByIdAPI, articlesAPI, Comments} from '../../app/api/api';
import {useParams} from 'react-router-dom';

const initialState = {
  article: {
    id: 0,
    title: '',
    content: '',
    image: {
      url: '',
    },
    created_at: '',
  },
  comments: [] as Comments[],
};

interface ArticleByIdData extends ArticleByIdAPI {}

export const useArticleById = () => {
    const [articleCard, setArticleCard] = useState<ArticleByIdData>(initialState);
    const [isLoading, setIsLoading] = useState(true)
    const {articleId} = useParams()
    React.useEffect(() => {
        async function fetchArticleCard() {
            try {
                setIsLoading(true)
                let {data} = await articlesAPI.getArticleById(Number(articleId))
                setArticleCard(data)
                setIsLoading(false)
            } catch (err) {
                console.log(err)
                alert("Something error! Please, try again!")
            }
        }
        fetchArticleCard()
    }, [articleId])
    
    return {articleCard, isLoading, setArticleCard}
}