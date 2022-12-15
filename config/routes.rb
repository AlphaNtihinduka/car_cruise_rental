Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
 devise_for :users

  namespace :api do
    namespace :v1 do
       resources :cars do
       resources :reservations
       end
      end  
  end

  root "root#index"
  get '*path', to: 'application#index', port: 5000
  # resources :cars, except: :destroy do
  #   delete '/', on: :member, action: :delete 
  # end

end
