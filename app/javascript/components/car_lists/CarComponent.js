import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CarComponent = () => {
  const cars = useSelector((state) => state.allcars.cars);
  const carRender = cars.map((car) => {
    const {
      id, name, image, description,
    } = car;
    return (
      <div key={id} className="car_container">
        <Link to={`/car/${id}`}>
          <div className='car_card'>
              <div className="image">
                <img src={image} alt="name" />
              </div>
              <h4>{name}</h4>
              <p>{description}</p>
          </div>
        </Link>
      </div>
    );
  });
  return <>{carRender}</>;
};

export default CarComponent;
