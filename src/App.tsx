import React from "react";
import CanvasScene from "./containers/CanvaScene";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: '';
    src: url('/fonts/.ttf') format('truetype');
  }

  @font-face {
    font-family: '';
    src: url('/fonts/.ttf') format('truetype');
  }

  html,
  body,
  #root
  {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    font-family: '', sans-serif;
    font-size: 16px;
    color: white;
    user-select: none;
    overflow-x: hidden;
    margin: 0;
    scroll-behavior: smooth;
    -webkit-tap-highlight-color: transparent;
    outline: none;
  }

  ::-webkit-scrollbar {
    background: transparent;
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: white;
    border-radius: 5px;
  }
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <CanvasScene />
    </>
  );
};

export default App;
