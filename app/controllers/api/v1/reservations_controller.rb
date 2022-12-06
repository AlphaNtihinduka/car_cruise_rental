class Api::V1::ReservationsController < ApplicationController
 
  def index
   
   @reservations = Reservation.all
   render json:@reservations
  end

   # GET /reservations/1
  def show
    render json:@reservation
  end

  # POST /reservations
  def create
   @reservation = reservation.new(reservation_params)

    if current_user.role == 'admin'
     @reservation.save
      render json:@reservation, status: :created
    elsif current_user.role != 'admin'
      render json: { message: 'You are not an admin user' }
    else
      render json:@reservation.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reservations/1
  def update
    if@reservation.update(reservation_params)
      render json:@reservation
    else
      render json:@reservation.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reservations/1
  def destroy
   @reservation.destroy
    render json: reservation.all
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_reservation
   @reservation = Reservation.find_by(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def reservation_params
    params.require(:reservation).permit(:image ,:name, :description, :price_per_day)
  end

end
