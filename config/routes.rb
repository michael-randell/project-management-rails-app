Rails.application.routes.draw do
  resources :customers
  resources :tasks do
    resources :task_times
  end
  resources :projects
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "application#main"
end
