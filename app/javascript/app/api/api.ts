import axios from 'axios';
import {ArticleAdmin, ArticleAPI, ArticleByIdAPI, Comments, UserInfo} from './api-types';

export const instance = axios.create({
  baseURL: '/api/',
});

export const articlesAPI = {
  async getArticles(currentPage = 1, pageSize = 5) {
    return await instance.get<ArticleAPI>(`articles?limit=${pageSize}&page=${currentPage}`);
  },
  async getArticleById(id: number) {
    return await instance.get<ArticleByIdAPI>(`articles/${id}`);
  },
  async setComments(comment: Comments) {
    return await instance.post<Comments>(`comments`, comment);
  },
};

export const loginAPI = {
  async login(userInfo: UserInfo) {
    return await axios.post<UserInfo>(`/users/sign_in`, userInfo);
  },
  async checkAuth() {
    return await axios.get('/signed_in');
  },
  async logout() {
    return await axios.delete('/users/sign_out');
  },
};

export const adminPanelAPI = {
  async addArticle(article: ArticleAdmin) {
    const newData = {
      article: {
        ...article,
        image: article.image![0],
      },
    };
    return await instance.post(`/articles`, newData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  async updateArticle(id: number, article: ArticleAdmin) {
    return await instance.put(`/articles/${id}`, article);
  },
  async deleteArticle(id: number) {
    return await instance.delete(`/articles/${id}`);
  },
};
