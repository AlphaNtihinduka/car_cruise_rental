import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiLeftArrow } from "react-icons/bi";
import { BiRightArrow } from "react-icons/bi";
import axios from "axios";
import { useParams } from "react-router-dom";

const CarDetails = () => {
  let { car_id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/api/v1/cars/${car_id}`)
      .then(response => {
        setCar(response.data);
      });
  }, []);

  if (!car) {
    return (
      <div>Loading...</div>
    );
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
                <td>$ {car.price_per_day}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="inside_Arrows">
        <div className="lArrow_container btn">
          <Link to="/cars">
            <span className="arrow">
              <BiLeftArrow />
            </span>
          </Link>
        </div>

        <div className="rArrow_container btn">
          <Link to="/cars">
            <span className="arrow">
              <BiRightArrow />
            </span>
          </Link>
        </div>
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
