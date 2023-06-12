Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  namespace :api do
    get 'messages/random', to: 'api/messages#random_greeting'
  end
  # Defines the root path route ("/")
  # root "articles#index"
end
