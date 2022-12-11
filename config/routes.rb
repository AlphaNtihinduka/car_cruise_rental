Rails.application.routes.draw do
  get 'private/test'
  devise_for :users, 
  path: '', 
  path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  },
  controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  namespace :api do
    namespace :v1 do
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
