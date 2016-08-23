Rails.application.routes.draw do
  root to: 'static_pages#root'
  resources :customers, defaults: {format: :json}, only: [:create, :index, :show, :update, :destroy]
  resources :fields, defaults: {format: :json}, only: [:index]
end
