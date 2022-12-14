import React, { useState } from 'react';
import './styles.css';

const AddCar = () => {
  const [name, setname] = useState('');
  const [pricePerDay, setPricePerDay] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const car = {};
    car.name = name;
    car.price_per_day = pricePerDay;
    car.description = description;
    car.image = image;
    car.user_id = 2;

    const response = await fetch('http://127.0.0.1:5000/api/v1/cars', {
      method: 'POST',
      body: JSON.stringify(car),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(await response.json());
  };

  return (
    <div className="add-form">
      <h1>Add A New Rental Car</h1>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="container d-grid justify-content-center align-items-center">
          <Table className="table d-flex grid-template-column-1fr 1fr">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price Per Day</th>
                <th>Description</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="text" value={name} id="name" onChange={(event) => setname(event.target.value)} />
                </td>
                <td>
                  <input type="text" value={pricePerDay} id="price_per_day" onChange={(event) => setPricePerDay(event.target.value)} />
                </td>
                <td>
                  <input type="text" value={description} id="description" onChange={(event) => setDescription(event.target.value)} />
                </td>
                <td>
                  <input type="text" value={image} id="image" onChange={(event) => setImage(event.target.value)} />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div>
        <button onClick={handleSubmit} type="button">Submit</button>
      </div>
    </div>
  );
};
export default AddCar;
