Rails.application.routes.draw do
  devise_for :users
  root "articles#index"

  resource :articles, only: [:index, :show]

  namespace :admin do
    root "articles#index", as: :admin_root
    resource :articles
  end
end
