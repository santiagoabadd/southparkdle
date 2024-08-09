import React from "react";
import "./assets/global.css";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Theme } from "./utils/GlobalInterfaces";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { GameGuessPage } from "./pages/GameGuessPage";
import { GameShadowPage } from "./pages/GamesShadowPage";
import { GameEmojiPage } from "./pages/GameEmojiPage";
import { GamePhrasePage } from "./pages/GamesPhrasePage";

const theme: Theme = {
  colors: {
    blue: "#1DA1F2",
    black: "#14171a",
    darkGray: "#657786",
    gray: "#AAB8C2",
    lightGray: "#E1E8ED",
    white: "#f5f8fa",
    error: "red",
  },
};

const GlobalStyle = createGlobalStyle`
*{

  font-weight:500;
  margin:0;
}
`;

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/game/classic" element={<GameGuessPage/>} />
        <Route path="/game/shadow" element={<GameShadowPage/>} />
        <Route path="/game/emoji" element={<GameEmojiPage/>} />
        <Route path="/game/phrase" element={<GamePhrasePage/>} />
      </Routes>
    </ThemeProvider>
  );
};