class Api::V1::UsersController < ApplicationController
  before_action :authorize_request, except: %i[index create]

  def index
    @users = User.all
    render json: @users
  end

  # GET /cars/1
  def show
    render json: @user
  end

  # POST /users
  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /cars/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
    render json: User.all
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_user
    @user = user.find_by(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def user_params
    params.permit(:name, :email, :password)
  end
end
