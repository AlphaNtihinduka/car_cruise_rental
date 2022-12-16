import React from 'react';
import {
  FaTwitter, FaFacebook, FaGlide, FaVimeo, FaPinterest,
} from 'react-icons/fa';
import './styles.css';

const Socials = () => (
  <div>
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
