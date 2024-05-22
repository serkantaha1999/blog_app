export const ROUTES = {
  layout: '/',
  adminPanel: '/admin',
  login: '/log_in',
  editArticles: '/admin/articles/new',
  articleById: ((id: null | number)  => (id ? `/articles/${id}` : "/articles/:articleId")),
  editArticleById: ((id: null | number)  => (id ? `/admin/articles/${id}/edit` : "/admin/articles/:articleId/edit"))
};
