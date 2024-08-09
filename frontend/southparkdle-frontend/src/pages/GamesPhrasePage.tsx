import React, { useEffect } from "react";
import { Logo } from "../features/logo/Logo";
import { StatsNav } from "../features/stats/StatsNav";
import {GameShadow}  from "../features/gameShadow/GameShadow";
import { GamePhrase } from "../features/gamePhrase/GamePhrase";
import { GameNav } from "../features/nav/GameNav";

export const GamePhrasePage: React.FC = () => {
  
  

  

  

  useEffect(() => {
    
});

  return (
    <div className="page-container">
      <div className="game-phrase-container">
      <Logo/>
      <GameNav/>
      <StatsNav/>
      <GamePhrase/>
      </div>
    </div>
  );
};
