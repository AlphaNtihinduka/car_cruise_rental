import { ActionTypes } from "../constants/actionTypes"

const initialState = {
    cars: []
    // cars: [
    //     { 
    //     id:1,
    //     name: "Genesis GV70",
    //     description: "Genesis GV70 models. The GV70 is a small luxury SUV available in two trim levels: 2.5T and 3.5T Sport",
    //     price_per_day: 800,
    //     image: "https://images.cars.com/cldstatic/wp-content/uploads/genesis-gv70-2022-03-exterior-grey-profile-suv-scaled.jpg"
    //     },
    //     { 
    //     id:2,    
    //     name: "Ram 1500 Limited Longhorn",
    //     description: "The 2022 RAM 1500 Longhorn is offered with a 3.6-liter V6 gas engine. It has an eTorque system, which gives it mild-hybrid capabilities. ",
    //     price_per_day: 1000,
    //     image: "https://images.cars.com/cldstatic/wp-content/uploads/ram-1500-limited-2022-exterior-oem-profile-scaled.jpg"
    //     },
    // ]
}

export const carReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_CARS:
            return {...state, cars:payload}
        default:
            return state
    }
}

export const selectedCarReducer = (state = {}, {type, payload}) => {
    switch(type) {
        case ActionTypes.SELECTED_CAR:
            return {...state, ...payload}
        default:
            return state
    }
}