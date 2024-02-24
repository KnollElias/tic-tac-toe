import React, { useEffect, useState } from "react";
import { getGameState, clearGameState } from "../../service/gameState";

const GameWinner: React.FC = () => {
  const noWinnerString: string = "No winner yet";
  const [winner, setWinner] = useState(noWinnerString);

  const handleGameMove = () => {
    const actualGameState = getGameState();
    setWinner(
      actualGameState.winner != null
        ? `${actualGameState.winner} won the game!`
        : noWinnerString
    );
  };

  useEffect(() => {
    window.addEventListener("gameMove", handleGameMove);
    return () => window.removeEventListener("gameMove", handleGameMove);
  }, []);

  return (
    <header style={{ textAlign: "center", marginBottom: "20px" }}>
      <div>Winner: {winner}</div>
      <div onClick={() => clearGameState()}>Reset Game</div>
    </header>
  );
};

export default GameWinner;
