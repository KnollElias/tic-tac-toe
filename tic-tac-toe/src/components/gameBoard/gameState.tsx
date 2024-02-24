import React from "react";
import { getGameState, getCurrentPlayer } from "../../service/gameState"; // Adjust the import path as necessary

const GameDisplay: React.FC = () => {
  const gameState = getGameState();
  const currentPlayer = getCurrentPlayer();

  React.useEffect(() => {
    console.log("Game state changed:", gameState);
  }, [gameState]);

  return (
    <div>
      <h2>Tic-Tac-Toe Game</h2>
      <div>Current Player: {currentPlayer}</div>
      <div>
        <h3>Board:</h3>
        {gameState.board.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: "flex" }}>
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                style={{
                  width: "50px",
                  height: "50px",
                  border: "1px solid black",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div>Winner: {gameState.winner ? gameState.winner : "No winner yet"}</div>
    </div>
  );
};

export default GameDisplay;
