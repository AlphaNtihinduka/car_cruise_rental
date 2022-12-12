import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BiLeftArrow } from "react-icons/bi";
import { BiRightArrow } from "react-icons/bi";

// import "./assets/stylesheets/cardetails.css";
// import axios from "axios";

// const logo = require("C:UsersUserDesktop\finalcar_cruise_rentalappjavascriptcomponentscar_detailimagesCruise-A.png");
class CarDetails extends Component {
  // state ={
  //     car: null
  // }
  // componentDidMount(){
  //     let id = this.props.match.params.car_id;
  //     axios.get('http://127.0.0.1:5000/api/v1/cars/' + car.id)
  //     .then(response => {
  //       this.setState({
  //         car: response.data
  //       })
  //     })
  // }
  render() {
    return (
      <div className="cDetails_container">
        {/* Link helps to avoid sending a request to server again and again, NAVLINK GIVES THE ACTIVE ATTRIBUTE AND HELPS WITH STYLING */}

        <div className="carInfor">
          <div className="cDetails_image">
            {/* <img src={`${this.state.car.image}`} alt={`${this.state.car.name} `} /> */}{" "}
            <img alt="car image" />
          </div>

          <div className="cDetails_table">
            <h2>
              {/* {this.state.car.name} */}
              name
            </h2>

            <table className="dTable">
              <tbody>
                <tr>
                  <th>Model</th>
                  <td>
                    {/* {this.state.car.name} */}
                    name
                  </td>
                </tr>
                <tr>
                  <th>Description</th>
                  <td>{/* {this.state.car.description} */}</td>
                </tr>
                <tr>
                  <th>Price per day</th>
                  <td>{/* {this.state.car.price_per_day} */}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="inside_Arrows">
          <div className="lArrow_container btn">
            <Link to="/cars">
              <span className="arrow">
                <BiLeftArrow />
              </span>
            </Link>
          </div>

          <div className="rArrow_container btn">
            <Link to="/cars">
              <span className="arrow">
                <BiRightArrow />
              </span>
            </Link>
          </div>
        </div>

        <div className="dReserve_btn btn">
          <Link to="/reservations" className="">
            Reserve this Car
          </Link>
        </div>
      </div>
    );
  }
}

module.exports = CarDetails;
