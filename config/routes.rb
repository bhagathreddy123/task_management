Rails.application.routes.draw do
  get 'users/new'
  get 'sessions/new'
  root 'home#index'
  namespace :api do 
    namespace :v1 do
      resources :tasks, only: [:index, :create]
    end
  end
  resources :users, only: [:create]
  get 'users/new', to: 'users#new'
  get '/signup', to: 'users#new'
  get '/signin', to: 'sessions#new'
  post '/signin', to: 'sessions#create'
  delete "/signout", to: 'sessions#destroy', as: 'session'
end
