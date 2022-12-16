class Reservation < ApplicationRecord
  belongs_to :user
  belongs_to :car

  validates :days, :pick_date, presence: true
end
