class Api::V1::CarsController < ApplicationController
 
  def index
    @cars = Car.all
    render json: @cars
  end

   # GET /cars/1
  def show
    render json: @car
  end

  # POST /cars
  def create
    @car = car.new(car_params)

    if current_user.role == 'admin'
      @car.save
      render json: @car, status: :created
    elsif current_user.role != 'admin'
      render json: { message: 'You are not an admin user' }
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
    @car.destroy
    render json: car.all
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_car
    @car = Car.find_by(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def doctor_params
    params.require(:car).permit(:image ,:name, :description, :price_per_day)
  end

end
