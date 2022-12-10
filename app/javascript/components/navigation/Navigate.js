import React from "react";
import { Link } from "react-router-dom";
import AddForm from "./AddForm";
import Socials from "./Socials";

const Navigate = () => {
    return (
        <div>
            <ul>
            <li><Link to={"/"}>HomePage</Link></li>
            <li><Link to={"/addform/new"}>AddForm</Link></li>
            {/* <Link to="/reserve-form"><li>#</li></Link>
            <Link to="/my-reservation"><li>#</li></Link> */}
            <li><Link to={"/delete"}></Link></li>
            </ul>
            <div>
               <Socials/>
            </div>
        </div>
    );
};

export default Navigate;