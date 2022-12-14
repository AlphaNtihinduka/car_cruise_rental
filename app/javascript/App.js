import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import './App.css';
import CarListing from './components/car_lists/CarListing';
import CarDetails from './components/car_detail/CarDetail';
import Login from './pages/auth/login';
import Signup from './pages/auth/registration';
// import ReservationListing from './components/reservation/MyReservations';

// import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/car" element={<CarListing />} />
        <Route path="/car/:car_id" element={<CarDetails />} />
      </Routes>
    </div>
  );
}

export default App;
