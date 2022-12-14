import React from 'react';
import {
  FaTwitter, FaFacebook, FaGlide, FaVimeo, FaPinterest,
} from 'react-icons/fa';
// import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import './styles.css';

const Socials = () => (
  <div>
    {/* <div className="addcar-arrow">
      <div className="left-arrow"><BiLeftArrow /></div>
      <div className="right-arrow"><BiRightArrow /></div>
    </div> */}
    <ul className="socials">
      <li><FaTwitter /></li>
      <li><FaFacebook /></li>
      <li><FaGlide /></li>
      <li><FaVimeo /></li>
      <li><FaPinterest /></li>
    </ul>
  </div>
);
export default Socials;
