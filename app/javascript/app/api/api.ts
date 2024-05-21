import axios from "axios";

export interface Articles {
    id: number
    title: string
    content: string
    image: {
        url: string
    }
    created_at: string
}

export interface ArticleAPI {
    articles: Articles[]
    limit: number
}

export interface ArticleByIdAPI {
    article: Articles
    comments: string[]
}

export const instance = axios.create({
    baseURL: "/api/",
})

export const articlesAPI = {
    async getArticles(currentPage = 1, pageSize = 5) {
        return await instance.get<ArticleAPI>(`articles?limit=${pageSize}&page=${currentPage}`)
    },
    async getArticleById(id: number) {
        return await instance.get<ArticleByIdAPI>(`articles/${id}`)
    },
    async setComments(comment: any) {
        return await instance.post(`comments`, comment)
    }
}
