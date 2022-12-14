import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Navigate = () => (
  <div className="link-container">
    <div className="link-list">
    <ul>
      <li><Link to="/">HOME PAGE</Link></li>
      <li><Link to="/addcar">ADD CAR</Link></li>
      <li><Link to="/delete">DELETE</Link></li>
    </ul>
  </div>
  </div>
  
);

export default Navigate;
