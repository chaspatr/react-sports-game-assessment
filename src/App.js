import React from "react";
import raccoonsLogo from "./assets/logos/raccoon.png";
import squirrelsLogo from "./assets/logos/squirrel.png";
import bunniesLogo from "./assets/logos/bunny.png";
import houndsLogo from "./assets/logos/hound.png";
import "./App.css";
import Game from "./components/game/Game";

function App(props) {
  const raccoons = {
    name: "Russiaville Raccoons",
    logoSrc: raccoonsLogo,
  };

  const squirrels = {
    name: "Sheridan Squirrels",
    logoSrc: squirrelsLogo,
  };

  const bunnies = {
    name: "Burlington Bunnies",
    logoSrc: bunniesLogo,
  };

  const hounds = {
    name: "Hammond Hounds",
    logoSrc: houndsLogo,
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
