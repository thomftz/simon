Rails.application.routes.draw do
  resources :scores
  resources :users

  root 'site#index'
end
