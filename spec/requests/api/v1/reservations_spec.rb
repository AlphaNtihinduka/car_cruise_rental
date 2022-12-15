require 'swagger_helper'

RSpec.describe 'api/v1/reservations', type: :request do

  after(:all) do
    Reservation.destroy_all
    Item.destroy_all
    User.destroy_all
  end

  let(:user) { create(:user) }
  let(:Authorization) { generate_jwt_token_for(user) }

  path '/api/v1/cars/{car_id}/reservations' do
      get('list reservations') do
        tags 'Reservations'
        produces 'application/json'
        security [bearerAuth: []]
  
        response(200, 'successful') do
          before { create_list(:car, 1) }
          example 'application/json', :successful, {
            code: 200,
            data: [
              {
                id: '1',
                type: 'reservation',
                attributes: {
                  id: 1,
                  days: 20,
                  pick_date: '2022-12-21',
                  user_id: 1,
                  car_id: 1,
                }
              }
            ]
          }
          run_test!
        end
    end

    post('create reservation') do
      response(200, 'successful') do
        let(:car_id) { '1' }

        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end
        run_test!
      end
    end
  end

  path '/api/v1/cars/{car_id}/reservations/new' do
    # You'll want to customize the parameter types...
    parameter name: 'car_id', in: :path, type: :string, description: 'car_id'

    get('new reservation') do
      response(200, 'successful') do
        let(:car_id) { '1' }

        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end
        run_test!
      end
    end
  end

  path '/api/v1/cars/{car_id}/reservations/{id}/edit' do
    # You'll want to customize the parameter types...
    parameter name: 'car_id', in: :path, type: :string, description: 'car_id'
    parameter name: 'id', in: :path, type: :string, description: 'id'

    get('edit reservation') do
      response(200, 'successful') do
        let(:car_id) { '1' }
        let(:id) { '1' }

        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end
        run_test!
      end
    end
  end

  path '/api/v1/cars/{car_id}/reservations/{id}' do
    # You'll want to customize the parameter types...
    parameter name: 'car_id', in: :path, type: :string, description: 'car_id'
    parameter name: 'id', in: :path, type: :string, description: 'id'

    get('show reservation') do
      response(200, 'successful') do
        let(:car_id) { '1' }
        let(:id) { '1' }

        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end
        run_test!
      end
    end

    patch('update reservation') do
      response(200, 'successful') do
        let(:car_id) { '1' }
        let(:id) { '1' }

        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end
        run_test!
      end
    end

    put('update reservation') do
      response(200, 'successful') do
        let(:car_id) { '1' }
        let(:id) { '1' }

        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end
        run_test!
      end
    end

    delete('delete reservation') do
      response(200, 'successful') do
        let(:car_id) { '1' }
        let(:id) { '1' }

        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end
        run_test!
      end
    end
  end
end
