import React from 'react';
import { useSelector } from 'react-redux';

const ReservationComponent = () => {
  const reservations = useSelector((state) => state.allreservations.reservations);
  const reservationRender = reservations.map((reservation) => (
    <div key={reservation.id} className="my_reservation_container">
      <div className="car_reservation_info_container">
        <div>
          <div className="reservation_image">
            <img src={reservation.car.image} alt="name" />
          </div>

        </div>
        <div className="reservation_info">
          <h3>{reservation.car.name}</h3>
          <p className="info">
            Period:
            {' '}
            {' '}
            {reservation.days}
            {' '}
            days
          </p>
          <p className="pick_date">
            Pick date:
            {' '}
            {' '}
            {reservation.pick_date}
          </p>
          <p className="info">
            Total pricing: $
            {reservation.car.price_per_day * reservation.days}
          </p>
        </div>
      </div>
    </div>
  ));
  return <>{reservationRender}</>;
};

export default ReservationComponent;
