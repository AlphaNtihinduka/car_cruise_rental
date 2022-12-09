import React from 'react';
import { Route, Routes } from 'react-router';
// import './App.css';
import CarListing from './components/car_lists/CarListing';
import CarDetails from './components/car_detail/CarDetail';
import ReservationListing from './components/reservation/MyReservations';
import "../assets/stylesheets/application.css";
// import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<CarListing />} />
        {/* <Route path="/" element={<ReservationListing />} /> */}
        <Route path="/car/:car_id" element={<CarDetails />} />
      </Routes>
    </div>
  );
}

export default App;
