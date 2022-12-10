import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../assets/stylesheets/application.css';
import HomePage from './components/navigation/HomePage';
import AddCar from './components/navigation/AddCar';
import Navigate from './components/navigation/Navigate';

const App = () => (
  <div className="App">
    <Router>
      <Navigate />
      <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/addcar" element={<AddCar />} />
        </Routes>
    </Router>
  </div>
);

export default App;
