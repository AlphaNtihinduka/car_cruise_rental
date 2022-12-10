import React from 'react';

const HomePage = () => {
  const title = ' Car Rental ';

  return (
    <header className="navbar">
      <div className="title">
        <h1>
          Welcome! to
          {title}
          HomePage
        </h1>
      </div>
    </header>
  );
};
export default HomePage;
