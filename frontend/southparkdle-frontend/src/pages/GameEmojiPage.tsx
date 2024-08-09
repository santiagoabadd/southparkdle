import React, { useEffect } from "react";
import "./HomePage.css";
import GameEmoji from "../features/game2/GameEmoji";
import { Logo } from "../features/logo/Logo";


export const GameEmojiPage: React.FC = () => {
  
  

  

  

  useEffect(() => {
    
});

  return (
    <div className="page-container">
      <div className="home-page-container">
       
        <Logo/>
        <GameEmoji/>
       
      </div>
    </div>
  );
};
