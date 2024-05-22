import React from 'react';
import AdminForm from '../../shared/components/AdminForm/AdminForm';
import {useArticleById} from "../hooks/useArticleById";
import {useArticles} from "../../shared/context/ArticlesContext";
import {useParams} from "react-router-dom";

const EditArticleAdminPage = () => {
    const {articleCard, isLoading} = useArticleById()
    const {articleId} = useParams()
    const {updateArticle} = useArticles()
    const onSubmit = (data: any) => {
        updateArticle(Number(articleId), data)
    }
    return (
        <div className={'page article-admin-page'}>
            <div className="article-admin-page__container">
                <h1 className="home-page__title page-title">Edit Article</h1>
                {!isLoading ? (
                    <AdminForm onSubmit={onSubmit}  buttonText={"Update"} articleCard={articleCard.article}/>
                ) : null}
            </div>
        </div>
    );
};

export default EditArticleAdminPage;
