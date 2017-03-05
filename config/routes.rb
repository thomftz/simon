Rails.application.routes.draw do
  resources :scores
  resources :users
  resources :sessions, only: [:create, :destroy]

  get 'auth/:provider/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')
  get 'signout', to: 'sessions#destroy', as: 'signout'
  get 'user', to: 'sessions#show'

  root 'site#index'
end
