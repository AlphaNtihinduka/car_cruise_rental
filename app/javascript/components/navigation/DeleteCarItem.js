import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setCars } from '../../redux/carActions/carActions';
import { Link } from 'react-router-dom';

const DeleteCarItem = () => {
  const dispatch = useDispatch();

  const fetchCars = async () => {
    const response = await axios
      .get('http://127.0.0.1:5000/api/v1/cars')
      .catch((err) => err);
    const cars = response.data.map((car) => ({
      id: car.id, // add the id property to the car object
      name: car.name,
      image: car.image,
      // other properties here
    }));
    dispatch(setCars(cars));
  };
  

  useEffect(() => {
    fetchCars();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const cars = useSelector((state) => state.allcars.cars);

  const handleDelete = async (id) => {
    const response = await axios
      .delete(`http://127.0.0.1:5000/api/v1/cars/${id}`)
      .catch((err) => err);
      return response;
  };

  const carRender = cars.map((car) => {
    const {
     id, name, image,
    } = car;

    return (
      <div key={id}>
        <Link to={`/car/${id}`}>
          <div className="image">
            <img src={image} alt="name" />
          </div>
          <h2>{name}</h2>
        </Link>
      
         <button type="button" onClick={() => handleDelete(id)}>Delete</button>
  
      </div>
    );
  });

  return <>{carRender}</>;
};

export default DeleteCarItem;