export const ROUTES = {
  layout: '/',
  adminPanel: '/admin',
  articleById: ((id: null | number)  => (id ? `/articles/${id}` : "/articles/:articleId")),
};
