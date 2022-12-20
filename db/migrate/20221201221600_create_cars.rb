class CreateCars < ActiveRecord::Migration[7.0]
    def change
      create_table :cars do |t|
        t.text :image
        t.string :name
        t.text :description
        t.decimal :price_per_day

        t.timestamps
      end
    end
  end

  
  