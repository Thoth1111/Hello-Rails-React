Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  root "home#index"
  namespace :api do
    get 'messages/random', to: 'messages#random_greeting'
  end
  # Defines the root path route ("/")
end
