import React from 'react';
import { useSelector } from 'react-redux';

const ReservationComponent = () => {
  const reservations = useSelector((state) => state.allreservations.reservations);
  const reservationRender = reservations.map((reservation) => ( 
    <div key={reservation.id} className="my_reservation_container">
      <div className='car_reservation_info_container'>
        <div>
          <div className="reservation_image">
            <img src={reservation.car.image} alt="name" />
          </div>
           
        </div>
        <div>
          <h3>{reservation.car.name}</h3> 
          <p>
            Period: {' '}
            {reservation.days}
            {' '}
            days
          </p>
          <p>
            Pick date: {' '}
            {reservation.pick_date}
          </p>
          <p>Total pricing: ${reservation.car.price_per_day * reservation.days}</p>
         </div>
      </div>
      <button className='cancel_btn'>Cancel reservation</button>
    </div>
  ));
  return <>{reservationRender}</>;
};

export default ReservationComponent;
