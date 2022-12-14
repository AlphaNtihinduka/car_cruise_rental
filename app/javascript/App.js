import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '../assets/stylesheets/application.css';
import AddCar from './components/navigation/AddCar';
import Navigate from './components/navigation/Navigate';
import CarListing from './components/car_lists/CarListing';
import CarDetails from './components/car_detail/CarDetail';
import ReservationListing from './components/reservation/MyReservations';
import AddReservation from './components/reservation/ReserveForm';

const App = () => (
  <div className="App">
    <Router>
      <Navigate />
      <Routes>
        {/* <Route exact path="/" element={<HomePage />} /> */}
        <Route exact path="/addcar" element={<AddCar />} />
        <Route exact path="/" element={<CarListing />} />
        <Route exact path="/car/:car_id" element={<CarDetails />} />
        <Route exact path="/reservations" element={<ReservationListing />} />
        <Route
          exact
          path="/car/:car_id/addreservation"
          element={<AddReservation />}
        />
      </Routes>
    </Router>
  </div>
);
export default App;
