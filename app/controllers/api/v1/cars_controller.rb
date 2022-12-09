class Api::V1::CarsController < ApplicationController
  def index
    @cars = Car.all.order(created_at: :desc)
    render json: @cars
  end

  # GET /cars/1
  def show
    @car = Car.find(params[:id])
    render json: @car
  end

  # POST /cars
  def create
    # @user = User.find(params[:id])
    @car = Car.new(car_params)

    if @car.save
      render json: @car, status: :created
    elsif render json: { message: 'You are not an admin user' }
    else
      render json: @car.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /cars/1
  def update
    if @car.update(car_params)
      render json: @car
    else
      render json: @car.errors, status: :unprocessable_entity
    end
  end

  # DELETE /cars/1
  def destroy
    @car = Car.find(params[:id])
    @car.delete
  end

  alias delete destroy

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_car
    @car = Car.find_by(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def car_params
    params.require(:car).permit(:image, :name, :description, :price_per_day, :user_id)
  end
end
