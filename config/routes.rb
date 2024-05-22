Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'users/sessions' }
  root "articles#index"

  get '/signed_in', to: 'articles#signed_in'
  get '/log_in', to: 'login#log_in'

  resources :articles, only: [:index, :show]

  namespace :admin do
    root "articles#index", as: :admin_root
    resources :articles
  end

  namespace :api do
    resources :comments, only: [:create]
    resources :articles, only: [:index, :show, :create, :destroy, :update]
  end
end
