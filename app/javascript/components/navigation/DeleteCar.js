import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCars } from '../../redux/carActions/carActions';


const DeleteCar = () => {
    const dispatch = useDispatch();
    const fetchdata = async () => {
      const response = await axios
        .get('http://127.0.0.1:5000/api/v1/cars')
        .catch((err) => err);
      dispatch(setCars(response.data));
    };
    

    const handleDelete = async (id) => {
      const response = await axios
        .delete(`http://127.0.0.1:5000/api/v1/cars/${id}`)
    };

    useEffect(() => {
      fetchdata()
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
      <>
        <div key={id}>
        <Link to={`/car/${id}`}>
          <div className="image">
            <img src={image} alt="name" />
          </div>
          <h2>{name}</h2>
          <h4>{description}</h4>
          <button type="button" onClick={() => handleDelete(id)}>Delete</button>
        </Link>
      </div>
      </>
    );
  };
  
  export default DeleteCar;
  