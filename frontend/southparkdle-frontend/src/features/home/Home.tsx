import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import logo from "../../assets/icono1.png";
import kenny from "../../assets/kenny.png";
import cartman from "../../assets/cartman.png";
import sombra from "../../assets/sombra.png";
import emoji from "../../assets/emoji.png";
import { useNavigate } from 'react-router-dom';

export const Home: React.FC = () => {
  
  return (
    <div className="home-container-flex">
      <div className="home-container">
        <div className="options-container">
            <div className="option-container">
              
                <a href="/game/classic" className="option">
                <div className="circulo"><img src={cartman} className="circle-imagen-classic" alt="" /></div>
                 
                  <h1 className="option-title">Clasico</h1>
                </a>
            </div>
            
            <div className="option-container">
            
            <a href="/game/phrase" className="option">
            
              <div className="circulo">
              <img className="circle-imagen-frase" src={kenny} alt="" />
        
              </div>
                <h1 className="option-title">Frase</h1>
            </a>
            </div>
            <div className="option-container">
            
            <a href="/game/shadow" className="option">
            <div className="circulo">
            <img src={sombra} className="circle-imagen-shadow" alt="" />
            </div>
                <h1 className="option-title">Sombra</h1>
            </a>
            </div>
            <div className="option-container">
            
            <a href="/game/emoji" className="option">
            <div className="circulo">
            <img src={emoji} className="circle-imagen-emoji" alt="" />
            </div>
                <h1 className="option-title">Emojis</h1>
            </a>
            </div>
        </div>
      </div>
    </div>
  );
};