Rails.application.routes.draw do
 devise_for :users

  post 'api/v1/auth/login', to: 'authentication#login'
  namespace :api do
    namespace :v1 do
       resources :users
       resources :cars do
       resources :reservations
       end
      end  
  end

  root "root#index"

  # resources :cars, except: :destroy do
  #   delete '/', on: :member, action: :delete 
  # end

end
