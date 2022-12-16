class Car < ApplicationRecord
  has_many :reservations, dependent: :destroy
  belongs_to :user

  validates :image, :name, :description, :price_per_day, presence: true
end
