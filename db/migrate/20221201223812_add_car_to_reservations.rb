class AddCarToReservations < ActiveRecord::Migration[7.0]
  def change
    add_reference :reservations, :car, null: false, foreign_key: true
  end
end
