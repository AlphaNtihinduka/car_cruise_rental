class CarSerializer < ActiveModel::Serializer
  attributes :id , :image , :name, :description, :price_per_day

  has_many :reservations
  belongs_to :user
end
