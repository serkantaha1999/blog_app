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
    comments: Comments[]
}

export interface Comments {
    article_id: number
    author: string
    content: string
}

export interface UserInfo {
  user: {
    email: string
    password: string
}
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
    async setComments(comment: Comments) {
        return await instance.post(`comments`, comment)
    }
}

export const loginAPI = {
    async login(userInfo: UserInfo) {
        return await axios.post(`/users/sign_in`, userInfo)
    },
    async checkAuth() {
        return await axios.get("/signed_in");
    },
    async logout() {
        return await axios.delete("/users/sign_out")
    }
}

export const adminPanelAPI = {
    async addArticle(article: any) {
        console.log(article.image)
        const formData = new FormData();
        formData.append('image', article.image)
        const newData = {
            article: {
                ...article,
                image: formData
            }
        }
        console.log(newData)
        return await instance.post(`/articles`, newData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
    },
    async updateArticle(id: number, article: any) {
        return await instance.put(`/articles/${id}`, article)
    },
    async deleteArticle(id: number) {
        return await instance.delete(`/articles/${id}`)
    },
}