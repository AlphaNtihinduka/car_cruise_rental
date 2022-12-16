import React, { useState } from 'react';
import Select from 'react-select';
import './styles.css';

const options = [
  { value: '/assets/audi.png', label: 'Audi' },
  { value: '/assets/blackcar.png', label: 'Black Car' },
  { value: '/assets/chevroelt.png', label: 'Chevrolet' },
  { value: '/assets/ferrari.png', label: 'Ferrari' },
  { value: '/assets/ford.png', label: 'Ford' },
];

const AddCar = () => {
  const [name, setname] = useState('');
  const [pricePerDay, setPricePerDay] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [user, setUser] = useState('');

  const handleSelectChange = (selectedOption) => {
    setImage(selectedOption.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const car = {};
    car.name = name;
    car.price_per_day = pricePerDay;
    car.description = description;
    car.image = image;
    car.user_id = user;

    const response = await fetch('http://127.0.0.1:5000/api/v1/cars', {
      method: 'POST',
      body: JSON.stringify(car),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    await response.json();
  };

  return (
    <div className="form-container">
      <div className="add-form">
        <h1>Add A New Rental Car</h1>
        <div className="container d-flex justify-content-center align-items-center">
          <form className="main-form">
            <div className="form-group">
              <div className="nform">
                {/* "jsx-a11y/label-has-associated-control": "off" */}
                <label htmlFor="name">Name</label>
                <input type="text" value={name} id="name" onChange={(event) => setname(event.target.value)} />
              </div>
              <div className="iform">
                <label htmlFor="user_id">User ID</label>
                <input type="text" value={user} id="user_id" onChange={(event) => setUser(event.target.value)} />
              </div>
              <div className="pform">
                <label htmlFor="price_per_day">Price Per Day</label>
                <input type="text" value={pricePerDay} id="price_per_day" onChange={(event) => setPricePerDay(event.target.value)} />
              </div>
              <div className="dform">
                <label htmlFor="description">Description</label>
                <input type="text" value={description} id="description" onChange={(event) => setDescription(event.target.value)} />
              </div>
              <div className="form-image">
                <label htmlFor="image">Image</label>
                <Select options={options} onChange={handleSelectChange} />
              </div>
              <div>
                <button className="btn-form" onClick={handleSubmit} type="button">Submit</button>
              </div>
            </div>
          </form>

          {/* <Table className="table d-flex grid-template-column-1fr 1fr">
            <thead>
              <tr>
                <th>Name</th>
                <th>User ID</th>
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
                  <input type="text" value={user} id="user_id" onChange={(event) => setUser(event.target.value)} />
                </td>
                <td>
                  <input type="text" value={pricePerDay} id="price_per_day" onChange={(event) => setPricePerDay(event.target.value)} />
                </td>
                <td>
                  <input type="text" value={description} id="description" onChange={(event) => setDescription(event.target.value)} />
                </td>
                <td>
                <select>
               <input type="text" value={image} id="image" onChange={(event) => setImage(event.target.value)} />
                  <option >
                    Select Image
                 </option>
          </select>
                </td>
              </tr>
            </tbody>
          </Table> */}
        </div>
      </div>
    </div>
  );
};
export default AddCar;
