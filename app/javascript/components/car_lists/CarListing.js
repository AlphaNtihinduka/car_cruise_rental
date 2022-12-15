import axios from "axios";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import CarComponent from "./CarComponent";
import { setCars } from "../../redux/carActions/carActions";

const CarListing = () => {
  const dispatch = useDispatch();
  const fetchdata = async () => {
    const response = await axios
      .get("http://127.0.0.1:5000/api/v1/cars")
      .catch((err) => err);
    dispatch(setCars(response.data));
  };

  useEffect(() => {
    fetchdata();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (

    <div className="mainCarpage">
      <div className="car_list_heading">
        <h1 className="latest_model">The latest car models</h1>
        <p className="selected_model">Enjoy the ride with selected model</p>
      </div>

      <div className="all_cars_container">
        <CarComponent />
      </div>
      
    </div>

  );
};

export default CarListing;
