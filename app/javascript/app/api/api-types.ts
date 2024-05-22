export interface ArticleAPI {
  articles: Articles[];
  limit: number;
}

export interface ArticleByIdAPI {
  article: Articles;
  comments: Comments[];
}

export interface Articles {
  id: number;
  title: string;
  content: string;
  image: {
    url: string;
  };
  created_at: string;
}
export interface Comments {
  article_id: number;
  author: string;
  content: string;
}

export interface UserInfo {
  user: {
    email: string;
    password: string;
  };
}

export interface ArticleAdmin {
  image: FileList | null;
  title: string;
  content: string;
}
