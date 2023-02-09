import React from 'react';
import './style.css';
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

export const RegisterIcons = () => {
  return (
    <span className="icons">
      <a href="#" className="linkedin-icon">
        <FaLinkedinIn />
      </a>
      <a href="#" className="facebook-icon">
        <FaFacebookF />
      </a>
      <a href="#" className="google-icon">
        <FcGoogle />
      </a>
    </span>
  );
};
