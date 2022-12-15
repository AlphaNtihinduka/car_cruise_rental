require 'rails_helper'

RSpec.describe User, type: :model do
  before(:each) do
    @user = User.create(name: 'NTIHINDUKA ALPHA', email: 'ntihindukaalpha@yahoo.com', password: '1234567890',
                        password_confirmation: '1234567890')
  end

  it 'User should have valid name attribute' do
    expect(@user.name).to eq('NTIHINDUKA ALPHA')
  end

  it 'User should have valid email attribute' do
    expect(@user.email).to eq('ntihindukaalpha@yahoo.com')
  end

  it 'user should have valid password' do
    expect(@user.password).to eq('1234567890')
  end

  it 'user should have valid password confirmation' do
    expect(@user.password_confirmation).to eq('1234567890')
  end

  it 'user for cars should be valid' do
    expect(@user).to be_valid
  end
end
