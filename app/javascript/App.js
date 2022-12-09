import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Navigation from "./components/navigation/Navigation";
import "../assets/stylesheets/application.css";
// import CarListing from "./components/car_lists/CarListing";
import CarDetails from "./components/car_detail/CarDetails";

const App = () => {
  return (
    <div className="App">
      <Router>
        {/* <Navigation /> */}
        <CarDetails />
      </Router>
    </div>
  );
};

export default App;
