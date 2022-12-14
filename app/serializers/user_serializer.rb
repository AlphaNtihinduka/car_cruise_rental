class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email

  has_many :cars, through: :reservations
  has_many :reservations, dependent: :delete_all
end
