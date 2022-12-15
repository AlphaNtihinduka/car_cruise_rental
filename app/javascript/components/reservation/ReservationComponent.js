import React from 'react';
import { useSelector } from 'react-redux';

const ReservationComponent = () => {
  const reservations = useSelector((state) => state.allreservations.reservations);
  const reservationRender = reservations.map((reservation) => ( 
    <div key={reservation.id} className="reservation">
        {console.log(reservation.car.name)}

        <div>
          <div className="reservation_image">
            <img src={reservation.car.image} alt="name" />
          </div>
          <h3>Car name{reservation.car.name}</h3>
          <p>Total pricing: ${reservation.car.price_per_day * reservation.days}</p>
        </div>
      <p>
        Reservation days: 
        {reservation.days}
        {' '}
        days
      </p>
      <p>
        Pick date:
        {reservation.pick_date}
      </p>
      <button>Cancel reservation</button>
    </div>
  ));
  return <>{reservationRender}</>;
};

export default ReservationComponent;
