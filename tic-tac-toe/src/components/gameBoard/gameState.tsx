import React from "react";
import { getGameState } from "../../service/gameState";

const GameState: React.FC = () => {
  const gameState = getGameState();

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
            <div key={cellIndex} className={"cell"}>
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameState;
