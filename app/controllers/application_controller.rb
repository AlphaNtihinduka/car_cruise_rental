class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  
  def authorize_request
    header = request.headers['Authorization']
    if header
      header = header.split.last
      begin
        @decoded = JsonWebToken.decode(header)
        @current_user = User.find_by_id!(@decoded[:user_id])
      rescue ActiveRecord::RecordNotFound || JWT::DecodeError => e
        render json: { errors: e.message }, status: :unauthorized
      end
    else
      render json: { errors: 'Unauthorized user' }, status: :unauthorized
    end
  end
end
