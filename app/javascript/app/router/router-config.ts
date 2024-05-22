export const ROUTES = {
  layout: '/',
  adminPanel: '/admin',
  login: '/log_in',
  articleById: ((id: null | number)  => (id ? `/articles/${id}` : "/articles/:articleId")),
};
