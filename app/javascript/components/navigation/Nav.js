import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Nav() {
  const [isLoggedOut, SetIsLoggedOut] = useState(true);
  //   useEffect(() => {
  //     if (JSON.parse(localStorage.getItem('current_user'))) {
  //       SetIsLoggedin(true);
  //     } else {
  //       SetIsLoggedin(false);
  //     }
  //   }, []);
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('current_user'))) {
      SetIsLoggedOut(false);
    } else {
      SetIsLoggedOut(true);
    }
  }, [isLoggedOut]);
  return (
    <div className={isLoggedOut ? 'nav-show' : 'nav-hide'}>
      <ul>
        <li><Link to="/carlist">Home Page</Link></li>
        <li><Link to="/addcar">Add Car</Link></li>
        <li><Link to="/delete">Delete</Link></li>
      </ul>
    </div>
  );
}

export default Nav;
