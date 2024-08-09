import React, { useEffect } from "react";
import "./GameNav.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/icono1.png";
import kenny from "../../assets/kenny.png";
import cartman from "../../assets/cartman.png";
import sombra from "../../assets/sombra.png";
import emoji from "../../assets/emoji.png";
import axios from 'axios';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import EventNoteIcon from '@mui/icons-material/EventNote';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export const GameNav: React.FC = () => {







  useEffect(() => {

  });

  return (
    <div className="gamenav-container">
      <div className="gamenav">
        <div className="game-items">
          <div className="item-container">

            <a href="/game/classic" className="item">
              <div className="item-content"><img src={cartman} className="item-imagen-classic" alt="" /></div>

              
            </a>
          </div>

          <div className="item-container">

            <a href="/game/phrase" className="item">

              <div className="item-content">
                <img className="item-imagen-frase" src={kenny} alt="" />

              </div>
              
            </a>
          </div>
          <div className="item-container">

            <a href="/game/shadow" className="item">
              <div className="item-content">
                <img src={sombra} className="item-imagen-shadow" alt="" />
              </div>
              
            </a>
          </div>
          <div className="item-container">

            <a href="/game/emoji" className="item">
              <div className="item-content">
                <img src={emoji} className="item-imagen-emoji" alt="" />
              </div>
              
            </a>
          </div>
        </div>

      </div>
    </div>
  );


};
