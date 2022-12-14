import React, { useState } from 'react';
import Socials from './Socials';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { Link, useParams } from 'react-router-dom';
import './styles.css';

const HomePage = () => {
  const { car_id } = useParams();
  const [car, setCar] = useState(null);
  const [largest_id, setLargestId] = useState(0);
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
      <div className="home-text">
        <p>This a website where you can rent exoctic cars for a fee that suits your personality and various event that you may have </p>
        </div>
        <div>
        <div className="inside_Arrows">
        {car_id > 1 && (
          <Link
            to={`/car/${parseInt(car_id, 10) - 1}`}
            className="lArrow_container btn"
          >
            <div>
              <span className="arrow">
                <BiLeftArrow />
              </span>
            </div>
          </Link>
        )}
        {car_id < largest_id && (
        <Link
          to={`/car/${parseInt(car_id, 10) + 1}`}
          className="rArrow_container btn"
        >
          <div>
            <span className="arrow">
              <BiRightArrow />
            </span>
          </div>
        </Link>
        )}
      </div>

        </div>
      <Socials />
    </div>
  );
};
export default HomePage;
