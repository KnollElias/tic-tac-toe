import React from "react";
import { getGameState } from "../../service/gameState";

const GameDisplay: React.FC = () => {
  const gameState = getGameState();

  React.useEffect(() => {
    console.log("Game state changed:", gameState);
  }, [gameState]);

  return (
    <div>
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
  );
};

export default GameDisplay;
