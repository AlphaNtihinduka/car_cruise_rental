import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import User from './authentication/User';
// import PrivateText from './authentication/PrivateText';
// import './App.css';
import CarListing from './components/car_lists/CarListing';
import CarDetails from './components/car_detail/CarDetail';
// import ReservationListing from './components/reservation/MyReservations';

// import Navigation from './components/navigation/Navigation';

function App() {
  const [currUser, setCurrUser]=useState(null);

  return (
    <div className="App">     
      {/* <Navigation /> */}
      <User currUser={currUser} setCurrUser={setCurrUser} />
      <Routes>
        
        <Route path="/" element={<CarListing />} />
        {/* <Route path="/" element={<ReservationListing />} /> */}
        {/* <Route path="/car/:car_id" element={<CarDetails />} /> */}
      </Routes>
    </div>
  );
}

export default App;
