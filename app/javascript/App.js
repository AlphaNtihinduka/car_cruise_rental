import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CarDetail from "./components/CarDetail";
import CarListing from "./components/CarListing";
import Navigation from "./components/Navigation";

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
