import axios from 'axios';
import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CarComponent from './CarComponent';
import { setCars } from '../../redux/carActions/carActions';

const CarListing = () => {
  const cars = useSelector((state) => state.allcars.cars);
  console.log("cars: ",cars)
  const dispatch = useDispatch();
  const fetchdata = async () => {
    const response = await axios
      .get('http://127.0.0.1:5000/api/v1/cars')
      .catch((err) => err);
    dispatch(setCars(response.data));
  };

  useEffect(() => {
    fetchdata();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
  return (
    <>
      <h1>Car listing</h1>
      <div className='all_cars_container'>
      <CarComponent />
      </div>
    </>
  );
};

export default CarListing;
