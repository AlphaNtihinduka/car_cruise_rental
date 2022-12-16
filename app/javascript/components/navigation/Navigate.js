import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Navigate = () => (
  <div className="nav-hide" id="nav-show">
    <ul>
      <li><Link to="/carlist">Home Page</Link></li>
      <li><Link to="/addcar">Add Car</Link></li>
      <li><Link to="/delete">Delete</Link></li>
    </ul>
  </div>
);

export default Navigate;
