class CreateJwtDenylist < ActiveRecord::Migration[7.0]
  def change
    create_table :jwt_denylist do |t|
      t.string :jti, null: false
      t.datetime :exp, null: false
    end
    add_column :users, :jti, :string, null: false
    add_index :users, :jti, unique: true
  end
end
