import React, { useEffect } from "react";
import "./GameGuessPage.css";
import { GameGuess } from "../features/game1/GameGuess";
import GameEmoji from "../features/game2/GameEmoji";
import { Logo } from "../features/logo/Logo";
import { StatsNav } from "../features/stats/StatsNav";
import { GameNav } from "../features/nav/GameNav";

export const GameGuessPage: React.FC = () => {
  
  

  

  

  useEffect(() => {
    
});

  return (
    <div className="page-container">
      <div className="game1-container">
      <Logo/>
      <GameNav/>
      <StatsNav/>
        <GameGuess/>

      </div>
    </div>
  );
};
