import React, { useState, useEffect } from "react";
import {
  getGameState,
  setGameState,
  changePlayer,
  checkWinner,
} from "../../service/gameState";

const GameState: React.FC = () => {
  const [gameState, setLocalGameState] = useState(getGameState());

  useEffect(() => {
    const refreshGameState = () => {
      setLocalGameState(getGameState());
    };

    const handleGameReset = () => {
      refreshGameState();
    };

    window.addEventListener("gameReset", handleGameReset);
    refreshGameState();

    return () => window.removeEventListener("gameReset", handleGameReset);
  }, []);

  const updateGameState = (cellIndex: number, rowIndex: number) => {
    const originalGameState = getGameState();
    let newGameState = { ...originalGameState };
    const previousValue = newGameState.board[rowIndex][cellIndex];
    const gameWinner = newGameState.winner;

    if (previousValue != null || gameWinner != null) {
      alert("Invalid move");
    } else {
      newGameState.board[rowIndex][cellIndex] = newGameState.currentPlayer;
      newGameState.currentPlayer = changePlayer(newGameState.currentPlayer);
      newGameState.winner = checkWinner(newGameState.board);
      console.log(newGameState);
      setGameState(newGameState);
      setLocalGameState(newGameState);
      window.dispatchEvent(new CustomEvent("gameMove"));
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: 16,
        flexDirection: "column",
      }}
    >
      {gameState.board.map((row, rowIndex) => (
        <div
          key={rowIndex}
          style={{ display: "flex", justifyContent: "center" }}
        >
          {row.map((cell, cellIndex) => (
            <div
              key={cellIndex}
              className={"cell"}
              onClick={() => updateGameState(cellIndex, rowIndex)}
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameState;
