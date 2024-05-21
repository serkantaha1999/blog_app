export const ROUTES = {
  layout: '/',
  adminPanel: '/admin',
  login: '/login',
  articleById: ((id: null | number)  => (id ? `/articles/${id}` : "/articles/:articleId")),
};
