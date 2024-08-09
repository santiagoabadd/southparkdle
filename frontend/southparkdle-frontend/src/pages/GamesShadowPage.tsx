import React, { useEffect } from "react";
import GameEmoji from "../features/game2/GameEmoji";
import { Logo } from "../features/logo/Logo";
import { StatsNav } from "../features/stats/StatsNav";
import {GameShadow}  from "../features/gameShadow/GameShadow";
import { GameNav } from "../features/nav/GameNav";

export const GameShadowPage: React.FC = () => {
  
  

  

  

  useEffect(() => {
    
});

  return (
    <div className="page-container">
      <div className="game2-container">
      <Logo/>
      <GameNav/>
      <StatsNav/>
      <GameShadow/>
      </div>
    </div>
  );
};
