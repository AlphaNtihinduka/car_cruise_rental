import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import AddForm from "./components/navigation/AddForm";
// import HomePage from "./components/navigation/HomePage";
import Navigation from "./components/navigation/Navigation";
import "../assets/stylesheets/application.css";
// import CarListing from "./components/car_lists/CarListing";
// import CarDetails from "./components/car_detail/CarDetails";


const App = () => {
  return (
    <div className="App">
     <Router>
         <Navigation />
        {/* <switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="//api/v1/cars/new" component={AddForm} />
        </switch> */}
     </Router>
    </div>
  );
};

export default App;
