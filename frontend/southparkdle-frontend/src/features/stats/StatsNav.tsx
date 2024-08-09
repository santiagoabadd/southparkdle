import React, { useEffect } from "react";
import "./StatsNav.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import axios from 'axios';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import EventNoteIcon from '@mui/icons-material/EventNote';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export const StatsNav: React.FC = () => {
  
  

  

  

  useEffect(() => {
    
});

  return (
    <div className="statsnav-container">
      <div className="statsnav">
          <div className="stats-items">
            <div className="stat-item">
               <LeaderboardIcon sx={{ color: "black", fontSize: "30px" }} />
            </div>
            <div className="stat-item">
            <WhatshotIcon sx={{ color: "black", fontSize: "30px" }} />
            </div>
            <div className="stat-item">
            <HelpOutlineIcon sx={{ color: "black", fontSize: "40px" }} />
            </div>
            <div className="stat-item">
            <EventNoteIcon sx={{ color: "black", fontSize: "40px" }} />
            </div>
          </div>
       
      </div>
    </div>
  );


};
