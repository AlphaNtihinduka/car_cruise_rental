import React from 'react';
import { Route, Routes } from 'react-router';
import CarListing from './components/car_lists/CarListing';
import CarDetails from './components/car_detail/CarDetail';
import '../assets/stylesheets/application.css';
import Navigate from './components/navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigate />
      <Routes>
        <Route exact path="/" element={<CarListing />} />
        <Route exact path="/car/:car_id" element={<CarDetails />} />
      </Routes>
    </div>
  );
}

export default App;
