import React from 'react';
import CarListing from '../car_lists/CarListing';
import Socials from './Socials';
import './styles.css';

const HomePage = () => {
  const title = ' Car Cruise Rental ';

  return (
    <div className="home-container">
      <header className="title">
        <h1>
          Welcome! to
          {title}
          Home Page
        </h1>
      </header>
      <CarListing />
      <div>
        <Socials />
      </div>
    </div>
  );
};
export default HomePage;
