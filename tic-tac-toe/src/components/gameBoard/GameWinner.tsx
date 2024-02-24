import React from "react";
import { getGameState, clearGameState } from "../../service/gameState";

const GameWinner: React.FC = () => {
  const gameState = getGameState();

  return (
    <header style={{ textAlign: "center", marginBottom: "20px" }}>
      <div>Winner: {gameState.winner ? gameState.winner : "No winner yet"}</div>
      <div onClick={() => clearGameState()}>Reset Game</div>
    </header>
  );
};

export default GameWinner;
