import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ReservationComponent = () => {
    const reservations = useSelector((state) => state.allreservations.reservations)
    // const reservedCars = useSelector((state) => state.allreservations.reservations)
    // console.log("reservedCars", reservedCars)
    console.log("component",reservations)
    const reservationRender = reservations.map((car) => {
        // const {id, days, pick_date, reserved_car} = car
        return(
            <div key={car.id} className="reservation">
                <h2>Reservation days: {car.days} days</h2>
                <h4>Pick date: {car.pick_date}</h4>
                <>
                {/* console.lo("reserved cars", {car})
                {car[1].map((reserve_car_details) => {
                    <p>{reserve_car_details.name}</p>
                })} */}
                </>
            </div>
        )
    })
    return <>{reservationRender}</>
}

export default ReservationComponent