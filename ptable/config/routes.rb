Rails.application.routes.draw do

  namespace :api do
    resources :periodics
  end

  root 'periodic#index'

end
