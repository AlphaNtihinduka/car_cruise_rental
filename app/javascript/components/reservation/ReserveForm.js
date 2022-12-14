import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

const AddReservation = () => {
  // Initialize state for car data
  const [allCars, setAllCars] = useState([]);
  const [carName, setCarName] = useState("");
  const [days, setDays] = useState("");
  const [pickDate, setPickDate] = useState("");
  const [user_id, setUserId] = useState("");
  const {car_id } = useParams();
 const [carId, setCarId] = useState("");
  // const [car, setCar] = useState();

  // Initialize state for car data

  useEffect(() => {
    // Use `manageCars` function to fetch car data
    const manageCars = async () => {
      const responses = await axios
        .get("http://127.0.0.1:5000/api/v1/cars")
        .catch((err) => err);

      // Update component state with car data
      setAllCars(responses.data);
      const car = allCars.find((car) => car.id === car_id);
    };

    // Call `manageCars` function to fetch data
    manageCars();
  }, []);
  // Empty array means this effect will only run once when the component mounts
const handleSubmit = async () => {
  try {
    // Create reservation object with the input fields values
    const reservation = {
      car_id: carId,
      user_id: user_id,
      days: days,
      pick_date: pickDate,
    };

    // Make a POST request to add the reservation
    const response = await axios.post(
      `http://127.0.0.1:5000/api/v1/cars/${car_id}/reservations`,
      reservation
    );

    // Handle success or failure
    if (response.status === 200) {
      // Success, show a message and reset the form
      alert("Reservation added successfully!");
      setCarId("");
      setUserId("");
      setDays("");
      setPickDate("");
    } else {
      // Failure, show an error message
      alert("Error adding reservation: " + response.data.message);
    }
  } catch (error) {
    // Handle network errors
    alert("Error adding reservation: " + error.message);
  }
};

  // Rest of your component code goes here

  return (
    <div className="add-form">
      <h1>Add A New reservation</h1>

      <input
        placeholder="Enter number of days "
        type="number"
        value={days}
        id="days"
        onChange={(event) => setDays(event.target.value)}
      />
      <br />
      <input
        placeholder="Enter pick date like YYYY-MM-DD."
        type="date"
        value={pickDate}
        id="pick_date"
        onChange={(event) => setPickDate(event.target.value)}
      />
      <br />

      {/* <select onChange={(event) => setCarId(event.target.value)}>
        <option>Select the car</option>
        {allCars.map((car) => (
          <option key={car.id} value={car.id}>
            {car.name}
          </option>
        ))}
      </select> */}

      <select type="number">
        <option>Select the car</option>
        {allCars.map((car) => (
          <option
            key={car.id}
            value={car.id}
            onChange={(event) => setCarId(event.target.value)}
          >
            {car.name}
          </option>
        ))}
      </select>
      <br />
      <input
        placeholder="user id"
        type="number"
        value={user_id}
        id="user_id"
        onChange={(event) => setUserId(event.target.value)}
      />
      <br />
      <div>
        <button onClick={handleSubmit} type="button">
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddReservation ;




