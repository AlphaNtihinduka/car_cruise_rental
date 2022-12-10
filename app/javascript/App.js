import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import "../assets/stylesheets/application.css";
import AddForm from "./components/navigation/AddForm";
import Navigate from "./components/navigation/Navigate";



const App = () => {
  return (
    <div className="App">
     <Router>
         <Navigate />
         <AddForm />
        {/* <switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/api/v1/cars/new" component={AddForm} />
        </switch> */}
     </Router>
    </div>
  );
};

export default App;
