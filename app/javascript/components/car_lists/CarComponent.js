import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';

const CarComponent = () => {
  const cars = useSelector((state) => state.allcars.cars);

  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage, setCarsPerPage] = useState(2);
  const lastCarIndex = currentPage * carsPerPage;
  const firstCarIndex = lastCarIndex - carsPerPage;
  const currentCars = cars.slice(firstCarIndex, lastCarIndex);

  return (
    <>
      {currentCars.map((car) => (
        <div key={car.id} className="car_container">
          <Link to={`/car/${car.id}`}>
            <div className="car_card">
              <div className="image">
                <img src={car.image} alt="name" />
              </div>
              <div className="name_description">
                <h4>{car.name}</h4>
                <p>{car.description}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
      <Pagination
        totalCars={cars.length}
        carsPerPage={carsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        setCarsPerPage={setCarsPerPage}
      />
    </>
  );
};

export default CarComponent;
