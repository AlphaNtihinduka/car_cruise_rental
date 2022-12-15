require 'rails_helper'

RSpec.describe Reservation, type: :model do
  before(:each) do
    @user = User.create(name: 'NTIHINDUKA ALPHA', email: 'ntihindukaalpha@yahoo.com', password: '1234567890', password_confirmation: '1234567890')
    @car = Car.create(image: "/assets/Cruise-A.png" , name: "Cruise-A" , description:"Yellow fast Ford with a luxurious interior.", price_per_day: 300.0, user_id: @user.id)
    @reservation = Reservation.create(days: 5 , pick_date: "12 Jun 2022" , car_id: @car.id, user_id: @user.id)
  end

  it 'reservation should have valid attributes' do
    expect(@reservation.days).to eq(5)
  end

  it 'reservation should be valid' do
    expect(@reservation).to be_valid
  end

  it 'user for reservation should be valid' do
    expect(@user).to be_valid
  end
end