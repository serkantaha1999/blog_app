import axios from "axios";

export interface Articles {
    id: number
    title: string
    content: string
    image: string
    created_at: string
}

export const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})



export const articlesAPI = {
    async getArticles(currentPage = 1, pageSize = 5) {
        return await instance.get(`/articles??limit=${pageSize}&page=${currentPage}`)
    }
}