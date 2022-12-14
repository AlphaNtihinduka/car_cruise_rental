import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ReservationComponent from './ReservationComponent';
import { setReservations } from '../../redux/reservation_actions/reservation_actions';

const ReservationListing = () => {
  const dispatch = useDispatch();
  const fetchdata = async () => {
    const response = await axios
      .get('http://127.0.0.1:5000/api/v1/cars/:car_id/reservations')
      .catch((err) => err);
    dispatch(setReservations(response.data));
  };

  useEffect(() => {
    fetchdata();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="allreservations">
      <h1 className="my_reservations">My car reservations</h1>
      <ReservationComponent />
    </div>
  );
};

export default ReservationListing;
