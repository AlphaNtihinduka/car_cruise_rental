import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CarDetail from './components/car_detail/CarDetail';
import CarListing from './components/car_lists/CarListing';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<CarListing />} />
        <Route path="/car/:car_id" element={<CarDetail />} />
      </Routes>
    </div>
  );
}

export default App;
