import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import '../assets/stylesheets/application.css';
import AddCar from './components/navigation/AddCar';
import Navigate from './components/navigation/Navigate';
import CarListing from './components/car_lists/CarListing';
import CarDetails from './components/car_detail/CarDetail';
import DeleteCarItem from './components/navigation/DeleteCarItem';
import ReservationListing from './components/reservation/MyReservations';
import AddReservation from './components/reservation/ReserveForm';
import Login from './pages/auth/login';
import Signup from './pages/auth/registration';
import ProtectedRoutes from './pages/auth/protectedRoutes';
// import Nav from './components/navigation/Nav';

const App = () => (

  <div className="App">
    <Router>
      <Navigate />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<ProtectedRoutes />}>
          <Route exact path="/delete" element={<DeleteCarItem />} />
          <Route exact path="/addcar" element={<AddCar />} />
          <Route exact path="/carlist" element={<CarListing />} />
          <Route exact path="/car/:car_id" element={<CarDetails />} />
          <Route exact path="/reservations" element={<ReservationListing />} />
          <Route exact path="/addreservation" element={<AddReservation />} />
        </Route>
      </Routes>
    </Router>
  </div>
);
export default App;
