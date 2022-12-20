class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.integer :days
      t.date :pick_date

      t.timestamps
    end
  end
end
