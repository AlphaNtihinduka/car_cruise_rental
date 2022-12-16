class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :days, :pick_date

  belongs_to :car
  belongs_to :user
end
