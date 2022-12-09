import { ActionTypes } from "../constants/actionTypes"

export const setReservations = (reservations) => {
    return {
        type: ActionTypes.SET_RESERVATIONS,
        payload: reservations
    }
}