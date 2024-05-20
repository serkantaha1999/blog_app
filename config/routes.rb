Rails.application.routes.draw do
  root "articles#index"

  resource :articles, only: [:index, :show]

  namespace :admin do
    root "articles#index", as: :admin_root
    resource :articles
  end
end
