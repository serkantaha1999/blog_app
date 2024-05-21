export const ROUTES = {
  layout: '/',
  adminPanel: '/admin',
  logOut: '/users/sign_out',
  articleById: ((id: null | number)  => (id ? `/articles/${id}` : "/articles/:articleId")),
};
