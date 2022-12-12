import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CarComponent = () => {
  const cars = useSelector((state) => state.allcars.cars);
  const carRender = cars.map((car) => {
    const { id, name, image, description } = car;
    return (
      <div key={id}>
        <Link to={`/car/${id}`}>
          <div className="image">
            <img src={image} alt="name" />
          </div>
          <h2>{name}</h2>
          <h4>{description}</h4>
        </Link>
      </div>
    );
  });
  return <>{carRender}</>;
};

export default CarComponent;
