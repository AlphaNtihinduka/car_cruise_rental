import React from "react";
import AddForm from "./AddForm";
import HomePage from "./HomePage";
import { Link } from "react-router-dom";
import Socials from "./Socials";

const Navigation = () => {
    return (
        <div>
            <ul>
            <Link to="/"><li>HomePage</li></Link>
            <Link to="/add-form"><li>AddForm</li></Link>
            <Link to="/reserve-form"><li>#</li></Link>
            <Link to="/my-reservation"><li>#</li></Link>
            <Link to="/delete"><li>#</li></Link>
            </ul>
            <div>
               <Socials/>
            </div>
        </div>
    );
};

export default Navigation;