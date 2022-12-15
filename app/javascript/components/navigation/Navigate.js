import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Navigate = () => (
  <div>
    <ul>
      <li><Link to="/">Home Page</Link></li>
      <li><Link to="/addcar">Add Car</Link></li>
      <li><Link to="/delete">DELETE</Link></li>
    </ul>
  </div>
);

export default Navigate;
