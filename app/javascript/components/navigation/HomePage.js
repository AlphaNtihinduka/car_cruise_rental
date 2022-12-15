import React from 'react';
import Socials from './Socials';
import CarListing from '../car_lists/CarListing';
import './styles.css';

const HomePage = () => {
  const title = ' Car Cruise Rental ';

  return (
    <header className="navbar">
      <div className="title">
        <h1>
          Welcome! to
          {title}
          HomePage
        </h1>
      </div>
      <div>
        <CarListing />
      </div>
      <div>
        <Socials />
      </div>
    </header>
  );
};
export default HomePage;
