import React, { useEffect } from "react";
import "./HomePage.css";
import { Home } from "../features/home/Home";
import { Logo } from "../features/logo/Logo";
import { StatsNav } from "../features/stats/StatsNav";

export const HomePage: React.FC = () => {
  
  

  

  

  useEffect(() => {
    
});

  return (
    <div className="page-container">
      <div className="home-page-container">
       
        <Logo/>
        <Home/>
       
      </div>
    </div>
  );
};
