class AddUserRefToCars < ActiveRecord::Migration[7.0]
  def change
    add_reference :cars, :user, null: false, foreign_key: true
  end
end
