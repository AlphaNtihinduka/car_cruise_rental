class ApplicationController < ActionController::API
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
