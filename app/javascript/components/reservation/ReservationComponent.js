import React from 'react';
import { useSelector } from 'react-redux';

const ReservationComponent = () => {
  const reservations = useSelector((state) => state.allreservations.reservations);
  const reservationRender = reservations.map((car) => (
    <div key={car.id} className="reservation">
      <h2>
        Reservation days:
        {car.days}
        {' '}
        days
      </h2>
      <h4>
        Pick date:
        {car.pick_date}
      </h4>
      <>
        {/* console.lo("reserved cars", {car})
                {car[1].map((reserve_car_details) => {
                    <p>{reserve_car_details.name}</p>
                })} */}
      </>
    </div>
  ));
  return <>{reservationRender}</>;
};

export default ReservationComponent;
