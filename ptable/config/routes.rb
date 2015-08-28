Rails.application.routes.draw do

  namespace :api do
    resources :periodics do
      resources :periodics, only: [:create, :update, :destroy]
    end
  end

  root 'periodic#index'

end
