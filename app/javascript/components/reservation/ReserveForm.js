import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Select from "react-select";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "./reserveForm.css";


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

  console.log(allCars);
  

   const options = [];
   allCars.filter((car) => {
     const obj = {};
     obj.value = car.id;
     obj.label = car.name;
     options.push(obj);
   });

   console.log(options);
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
    if (response.status === 201) {
      // Success, show a message and reset the form
      toast.success("Reservation added successfully!", {
        position: toast.POSITION.TOP_CENTER,
      });
      setCarId("");
      setUserId("");
      setDays("");
      setPickDate("");
    } else {
      // Failure, show an error message
      toast.error("Error adding reservation: " + response , {
        position: toast.POSITION.TOP_CENTER,
      });


    }
  } catch (error) {
    // Handle network errors
    toast.error("Error adding reservation: " + error, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
};

  // Rest of your component code goes here

  return (
    // <div className="add-form">
    //   <h1>Add A New reservation</h1>

    //   <input
    //     placeholder="Enter number of days "
    //     type="number"
    //     value={days}
    //     id="days"
    //     onChange={(event) => setDays(event.target.value)}
    //   />
    //   <br />
    //   <input
    //     placeholder="Enter pick date like YYYY-MM-DD."
    //     type="date"
    //     value={pickDate}
    //     id="pick_date"
    //     onChange={(event) => setPickDate(event.target.value)}
    //   />
    //   <br />

    //  <Select options ={options} onChange={(event) => setCarId(event.value)} />

    //   <br />
    //   <input
    //     placeholder="user id"
    //     type="number"
    //     value={user_id}
    //     id="user_id"
    //     onChange={(event) => setUserId(event.target.value)}
    //   />
    //   <br />
    //   <div>
    //     <button onClick={handleSubmit} type="button">
    //       Submit
    //     </button>
    //   </div>
    //   <ToastContainer />
    // </div>

    <div className="form-container">
      <div className="add-form">
        <h1>Add A New Reservation</h1>
        <div className="container d-flex justify-content-center align-items-center inner-form">
          <form className="main-form">
            <div className="form-group">
              <div className="form-name">
                <label htmlFor="name">Choose car name</label>
                <Select className='select'
                  options={options}
                  onChange={(event) => setCarId(event.value)}
                />
              </div>
              <div className="nform">
                <label htmlFor="days">Enter number of days you need car</label>
                <input
                  placeholder="Enter number of days"
                  type="number"
                  value={days}
                  id="days"
                  onChange={(event) => setDays(event.target.value)}
                />
              </div>
              <div className="iform">
                <label htmlFor="pick_date">
                  Enter pick date like YYYY-MM-DD.
                </label>
                <input
                  placeholder="Enter pick date like YYYY-MM-DD."
                  type="date"
                  value={pickDate}
                  id="pick_date"
                  onChange={(event) => setPickDate(event.target.value)}
                />
              </div>
              <div className="dform">
                <label htmlFor="user_id">User_id</label>
                <input
                  placeholder="user id"
                  type="number"
                  value={user_id}
                  id="user_id"
                  onChange={(event) => setUserId(event.target.value)}
                />
              </div>

              <div className='submit'>
                <button onClick={handleSubmit} type="button">
                    Reserve Car
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddReservation ;







