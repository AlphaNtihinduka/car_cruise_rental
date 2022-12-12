import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import './carDetails.css';
import axios from 'axios';

const CarDetails = () => {
  const { car_id } = useParams();
  const [car, setCar] = useState(null);
  const [largest_id, setLargestId] = useState(0);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/api/v1/cars/${car_id}`)
      .then((response) => {
        setCar(response.data);
      });

    axios.get('http://127.0.0.1:5000/api/v1/cars').then((response) => {
      const cars = response.data;
      const largest_id = cars.reduce((acc, cur) => Math.max(acc, cur.id), 0);
      setLargestId(largest_id);
    });
  }, [car_id]); // Only run the effect when the car ID changes

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <div className="cDetails_container">
      <div className="carInfor">
        <div className="cDetails_image">
          <img className="dcar_image" src={car.image} alt={car.name} />
        </div>

        <div className="cDetails_table">
          <div className="mainName_cont">
            <h2 className="mainName">{car.name}</h2>
            <p className="mainName">
              - 50% Deposit needed a day before pickdate!
            </p>
          </div>

          <table className="dTable">
            <tbody>
              <tr>
                <th>Model:</th>
                <td>{car.name}</td>
              </tr>
              <tr>
                <th>Description:</th>
                <td>{car.description}</td>
              </tr>
              <tr>
                <th>Price per day:</th>
                <td>
                  $
                  {car.price_per_day}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="inside_Arrows">
        {car_id > 1 && (
          <Link
            to={`/car/${parseInt(car_id, 10) - 1}`}
            className="lArrow_container btn"
          >
            <div>
              <span className="arrow">
                <BiLeftArrow />
              </span>
            </div>
          </Link>
        )}
        {car_id < largest_id && (
        <Link
          to={`/car/${parseInt(car_id, 10) + 1}`}
          className="rArrow_container btn"
        >
          <div>
            <span className="arrow">
              <BiRightArrow />
            </span>
          </div>
        </Link>
        )}
      </div>

      <div className="dReserve_btn btn">
        <Link to="/reservations" className="linkReserve">
          Reserve this Car
        </Link>
      </div>
    </div>
  );
};

export default CarDetails;
