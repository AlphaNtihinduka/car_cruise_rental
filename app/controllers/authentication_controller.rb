class AuthenticationController < ApplicationController
    # POST /auth/login
    def login
      @user = User.find_by_name!(params[:name])
      if @user.valid_password?(params[:password])
        token = JsonWebToken.encode(user_id: @user.id)
        time = Time.now + 24.hours.to_i
        render json: { token:, exp: time.strftime('%m-%d-%Y %H:%M'),
                       name: @user.name, id: @user.id }, status: :ok
      else
        render json: { error: 'Unauthorized' }, status: :unauthorized
      end
    rescue ActiveRecord::RecordNotFound
      render json: { errors: 'Username not found' }, status: :not_found
    end
  end