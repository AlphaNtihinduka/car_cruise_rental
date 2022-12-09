import React, { Component } from "react"; 

class AddForm extends Component {
        state = {
            username: "",
            price_per_day: "",
            car_description: "",
            car_image: ""
        };

         handleChange = (event) => {
            this.setState({
                [event.target.id]: event.target.value
            });
        };
        handleSubmit = (event) => {
            event.preventDefault();
            console.log(this.state);
        };
    render() {
        return (
            <div className="add-form">
                <h1>Add a New Rental Car</h1>
                <form onSubmit={this.handleSubmit}> 
                    <label htmlFor="name">Username</label>
                    <input type="text" id="username" onChange={this.handleChange} />
                    <label htmlFor="price">Price Price per Day</label>
                    <input type="text" id="price_per_day" onChange={this.handleChange} />
                    <label htmlFor="text">Car Description</label>
                    <input type="text" id="car_description" onChange={this.handleChange} />
                    <label htmlFor="image">Car Image</label>
                    <input type="text" id="car_image" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
};
export default AddForm;
