import React from 'react';
import { Link } from 'react-router-dom';
import Socials from './Socials';
import './styles.css';

const Navigate = () => (
  <div className="link-container">
    <div className="link-list">
    <ul>
      <li><Link to="/">HOME PAGE</Link></li>
      <li><Link to="/MyReservations">MY RESERVATIONS</Link></li>
      <li><Link to="/addcar">ADD CAR</Link></li>
      <li><Link to="/DeleteCar">DELETE</Link></li>
      <li><Link to="/Reserve a Car">RESERVE A CAR</Link></li>
    </ul>
    <div>
      <Socials />
    </div>
  </div>
  </div>
  
);

export default Navigate;
