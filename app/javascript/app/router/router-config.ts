export const ROUTES = {
  layout: '/',
  adminPanel: '/admin-panel',
  articleById: ((id: null | number)  => (id ? `/articles/${id}` : "/articles/:articleId")),
};
