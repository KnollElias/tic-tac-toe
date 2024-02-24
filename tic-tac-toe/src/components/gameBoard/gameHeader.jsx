import React from "react";
import { getCurrentPlayer } from "../../service/gameState";

const GameHeader: React.FC = () => {
  const currentPlayer = getCurrentPlayer();

  return (
    <header style={{ textAlign: "center", marginBottom: "20px" }}>
      <h1>Tic-Tac-Toe Game</h1>
      <p>Current Player: {currentPlayer}</p>
    </header>
  );
};

export default GameHeader;
