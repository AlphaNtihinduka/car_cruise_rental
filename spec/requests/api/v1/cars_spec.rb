require 'swagger_helper'

RSpec.describe 'api/v1/cars', type: :request do
  path '/api/v1/cars' do
    get('list cars') do
      response(200, 'successful') do
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

    post('create car') do
      response(200, 'successful') do
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

  path '/api/v1/cars/new' do
    get('new car') do
      response(200, 'successful') do
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

  path '/api/v1/cars/{id}/edit' do
    # You'll want to customize the parameter types...
    parameter name: 'id', in: :path, type: :string, description: 'id'

    get('edit car') do
      response(200, 'successful') do
        let(:id) { '123' }

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

  path '/api/v1/cars/{id}' do
    get 'Retrieves a Car' do
      tags 'cars'
      produces 'application/json', 'application/xml'
      parameter name: :id, in: :path, type: :string

      response '200', 'name found' do
        schema type: :object,
               properties: {
                 id: { type: :integer },
                 name: { type: :string },
                 image: { type: :text },
                 description: { type: :text },
                 price_per_day: { type: :decimal }
               },
               required: %w[id name image description price_per_day]

        let(:id) { Car.create(name: 'Audi', price_per_day: 100.12, image: 'https://www.audi.com/content/dam/gbp2/experience-audi/audi-r8/audi-r8-coupe/audi-r8-coupe-2019/1920x1080/1920x1080-r8-coupe-2019-1.jpg', description: 'Expensive car').id }
        run_test!
      end

      response '404', 'Car not found' do
        let(:id) { 'invalid' }
        run_test!
      end
    end
  end
end
