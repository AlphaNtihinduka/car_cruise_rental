import React, { useState } from 'react';

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
    // console.log(event.target.value);

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
      <h1>Add a New Rental Car</h1>
      <table>
        <tbody>
          <tr>
            <td>
              <input type="text" placeholder="name" value={name} id="name" onChange={(event) => setname(event.target.value)} />
            </td>
            <td>
              <input type="text" placeholder="price_per_day" value={pricePerDay} id="price_per_day" onChange={(event) => setPricePerDay(event.target.value)} />
            </td>
            <td>
              <input type="text" placeholder="car_description" value={description} id="description" onChange={(event) => setDescription(event.target.value)} />
            </td>
            <td>
              <input type="text" placeholder="car_image" value={image} id="image" onChange={(event) => setImage(event.target.value)} />
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <button onClick={handleSubmit} type="button">Submit</button>
      </div>
    </div>
  );
};
export default AddCar;
