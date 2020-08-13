import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Game from "./components/game/Game";

function App(props) {
  const raccoons = {
    name: "Russiaville Raccoons",
    logoSrc: "./assets/images/raccoon.png",
  };

  const squirrels = {
    name: "Sheridan Squirrels",
    logoSrc: "./assets/images/squirrel.png",
  };

  const bunnies = {
    name: "Burlington Bunnies",
    logoSrc: "./assets/images/bunny.png",
  };

  const hounds = {
    name: "Hammond Hounds",
    logoSrc: "./assets/images/hound.png",
  };

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game venue="Sheridan Arena" homeTeam={bunnies} visitingTeam={hounds} />
    </div>
  );
}
export default App;
