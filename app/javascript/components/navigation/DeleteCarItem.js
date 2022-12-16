import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { setCars } from '../../redux/carActions/carActions';
import 'react-toastify/dist/ReactToastify.css';

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

    fetchCars();
    if (response.status === 200) {
      toast.success('Cars deleted successfully!', {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toast.error(`Error deleting cars: ${response}`, {
        position: toast.POSITION.TOP_CENTER,
      });
    }

    return response;
  };

  const carRender = cars.map((car) => {
    const { id, name, image } = car;
    return (
      <div className="dcontainer" key={id}>
        <Link to={`/car/${id}`}>
          <h2 id="dcarname">{name}</h2>
          <div className="dimage">
            <img src={image} alt="name" />
          </div>

        </Link>
        <button className="dbtn" type="button" onClick={() => handleDelete(id)}>Delete</button>
        <ToastContainer />
      </div>
    );
  });

  return <div>{carRender}</div>;
};

export default DeleteCarItem;
