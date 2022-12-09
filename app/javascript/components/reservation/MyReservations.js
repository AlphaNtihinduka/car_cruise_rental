import axios from "axios";
import React, { useEffect } from "react";
import ReservationComponent from "./ReservationComponent";
import { setReservations } from "../../redux/reservation_actions/reservation_actions";
import { useDispatch } from "react-redux";


const ReservationListing = () => {
    const dispatch = useDispatch()
    const fetchdata = async () => {
        const response = await axios
        .get("http://127.0.0.1:5000/api/v1/cars/:car_id/reservations")
        .catch((err) => {
            console.log("error: ", err)
        });
        dispatch(setReservations(response.data))
        console.log("reservations",setReservations(response.data))
    }

    useEffect(() => {
        fetchdata()
    },[]) // eslint-disable-line react-hooks/exhaustive-deps
    return(
        <>
        <h1>Car listing</h1>
        <ReservationComponent/>
        </>
    )
}

export default ReservationListing