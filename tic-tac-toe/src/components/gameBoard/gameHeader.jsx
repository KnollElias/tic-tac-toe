import React, { useEffect, useState } from "react";
import { getGameState } from "../../service/gameState";

const GameHeader: React.FC = () => {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const handleGameMove = () => {
    const actualGameState = getGameState();
    setCurrentPlayer(
      actualGameState.currentPlayer != null
        ? `${actualGameState.currentPlayer}`
        : "Game Over!"
    );
  };

  useEffect(() => {
    window.addEventListener("gameMove", handleGameMove);
    return () => window.removeEventListener("gameMove", handleGameMove);
  }, []);
  return (
    <header style={{ textAlign: "center", marginBottom: "20px" }}>
      <h1>Tic-Tac-Toe Game</h1>
      <p>Current Player: {currentPlayer}</p>
    </header>
  );
};

export default GameHeader;
