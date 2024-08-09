import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Logo.css";
import logo from "../../assets/logo.png";

import { useNavigate } from 'react-router-dom';

export const Logo: React.FC = () => {
  
  return (
    <div className="logo-container-flex">
      <div className="logo-container">
        <a href="/home" className="logo">
            <img className="logo-imagen" src={logo} alt="" />
        </a>
      </div>
    </div>
  );
};