import React from 'react';
import { Link } from 'react-router-dom';
import Socials from './Socials';
import Hamburger from './Hamburger';
// import AiOutlineClose from 'react-icons/ai';
import './styles.css';

const Navigate = () => (
  <div className="link-container">
    <div className="menu-bars">
      <Hamburger />
    </div>
    <div className="link-list">
      <h1>Car Cruise Rental</h1>
      <nav>
        <ul className="nav-menu-items" id="links">
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
            <Link to="/delete">DELETE</Link>
          </li>
          <li>
            <Link to="/car/1/addreservations">RESERVE A CAR</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Socials />
      </div>
    </div>
  </div>
);

export default Navigate;
