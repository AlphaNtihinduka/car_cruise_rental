require 'rails_helper'

RSpec.describe Car, type: :model do
  subject do
    User.create(name: 'NTIHINDUKA ALPHA', email: 'ntihindukaalpha@yahoo.com', password: '1234567890', password_confirmation: '1234567890')
  end
  before do
    @car = Car.create(image: "/assets/Cruise-A.png" , name: "Cruise-A" , description:"Yellow fast Ford with a luxurious interior.", price_per_day: 300.0, user: subject)
  end

  context 'Validations should be working' do
    it 'ALL validations should be valid' do
      expect(subject).to be_valid
    end

    it 'Name car validation should return true' do
      expect(@car.name).to eql('Cruise-A')
    end

    it 'Name car validation should return true' do
      expect(@car.image).to eql('/assets/Cruise-A.png')
    end

    it 'Name user validation should return true' do
      expect(subject.name).to eql('NTIHINDUKA ALPHA')
    end

    it 'Name car validation should return true' do
      expect(@car.description).to eql('Yellow fast Ford with a luxurious interior.')
    end

    it 'Name user validation should return true' do
      expect(subject.email).to eql('ntihindukaalpha@yahoo.com')
    end

    it 'car user validation should return true' do
      expect(@car.user).to eql(subject)
    end

    it 'Name car validation should return true' do
      expect(@car.price_per_day).to_not eql('250.0')
    end
  end
end