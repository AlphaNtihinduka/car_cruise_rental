import React, { useState } from 'react';
// import Table from 'react-bootstrap/Table';
// import axios from 'axios';
// import './styles.css';

const AddReservation = () => {
  const allCars = [];
  // const manageCars = async () => {
  //   const responses = await axios
  //     .get('http://127.0.0.1:5000/api/v1/cars')
  //     .catch((err) => err);
  //   responses.data.map((car) => {
  //     allCars.push(car);
  //   });
  // };

  // manageCars();

  const [days, setdays] = useState('');
  const [pickDate, setPickDate] = useState('');
  const [car_id, setCarId] = useState('');
  const [user_id, setUserId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const reservation = {};
    reservation.days = days;
    reservation.pick_date = pickDate;
    reservation.car_id = car_id;
    reservation.user_id = 1;

    const response = await fetch(`http://127.0.0.1:5000/api/v1/cars/${car_id}/reservations`, {
      method: 'POST',
      body: JSON.stringify(reservation),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    await response.json();
    window.location.href = '/reservations';
  };

  return (
    <div className="add-form">
      <h1>Add A New reservation</h1>

      <input placeholder="days" type="number" value={days} id="days" onChange={(event) => setdays(event.target.value)} />
      {' '}
      <br />

      <input placeholder="pick date" type="text" value={pickDate} id="pick_date" onChange={(event) => setPickDate(event.target.value)} />
      {' '}
      <br />

      <select>
        <option>Select the car</option>
        {allCars.map((car) => (
          <option key={car.id} value={car.id} onChange={(event) => setCarId(event.target.value)}>
            {/* {car.name} */}
          </option>
        ))}
      </select>
      <br />
      {/* <input placeholder='car id' type="number" value={car_id} id="car_id" onChange={(event) => setCarId(event.target.value)} /> <br/> */}

      <input placeholder="user id" type="number" value={user_id} id="user_id" onChange={(event) => setUserId(event.target.value)} />
      {' '}
      <br />

      <div>
        <button onClick={handleSubmit} type="button">Submit</button>
      </div>
    </div>
  );
};
export default AddReservation;
