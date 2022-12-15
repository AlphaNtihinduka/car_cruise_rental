import React from "react";
import { Link } from "react-router-dom";
import Socials from "./Socials";
import "./styles.css";

const Navigate = () => (
  <div className="link-container">
    <div className="link-list">
      <h1>Welcome! to</h1>
      <h1>Car Cruise Rental</h1>
      <ul>
        <li>
          <Link to="/">CARS</Link>
        </li>
        <li>
          <Link to="/MyReservations">MY RESERVATIONS</Link>
        </li>
        <li>
          <Link to="/addcar">ADD CAR</Link>
        </li>
        <li>
          <Link to="/DeleteCar">DELETE</Link>
        </li>
        <li>
          <Link to="/car/1/addreservations">RESERVE A CAR</Link>
        </li>
      </ul>
      <div>
        <Socials />
      </div>
    </div>
  </div>
);

export default Navigate;
