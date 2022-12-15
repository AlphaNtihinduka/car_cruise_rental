import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CarComponent from './CarComponent';
import { setCars } from '../../redux/carActions/carActions';

const CarListing = () => {
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
    <div>
      <div className="carlist-title">
        <h1>Car listing</h1>
      </div>
      <div className="carlist-img">
        <CarComponent />
      </div>
    </div>
    
    </>
  );
};

export default CarListing;
