import React from 'react';
import Socials from './Socials';

const HomePage = () => {
  const title = 'Car Rental';

  return (
    <header className="navbar">
      <div className="title">
        <h1>
          Welcome! to
          {title}
          {' '}
          HomePage
        </h1>
      </div>
      <Socials />
    </header>
  );
};
export default HomePage;
