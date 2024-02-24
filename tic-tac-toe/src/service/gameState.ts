type GameState = {
  currentPlayer: "X" | "O";
  board: ("X" | "O" | null)[][];
  winner: "X" | "O" | "DRAW" | null;
};

const defaultState: GameState = {
  currentPlayer: "X",
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  winner: null,
};

export const changePlayer = (currentPlayer: "X" | "O"): "X" | "O" => {
  return currentPlayer === "X" ? "O" : "X";
};

export const checkWinner = (
  board: ("X" | "O" | null)[][]
): "X" | "O" | "DRAW" | null => {
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] &&
      board[i][0] === board[i][1] &&
      board[i][0] === board[i][2]
    ) {
      return board[i][0];
    }
    if (
      board[0][i] &&
      board[0][i] === board[1][i] &&
      board[0][i] === board[2][i]
    ) {
      return board[0][i];
    }
  }
  if (
    board[0][0] &&
    board[0][0] === board[1][1] &&
    board[0][0] === board[2][2]
  ) {
    return board[0][0];
  }
  if (
    board[0][2] &&
    board[0][2] === board[1][1] &&
    board[0][2] === board[2][0]
  ) {
    return board[0][2];
  }
  if (board.every((row) => row.every((cell) => cell))) {
    return "DRAW";
  }
  return null;
};

export const getGameState = (): GameState => {
  const stateFromStorage = localStorage.getItem("gameState");
  if (stateFromStorage) {
    return JSON.parse(stateFromStorage);
  } else {
    setGameState(defaultState);
    return defaultState;
  }
};

export const setGameState = (state: GameState): void => {
  localStorage.setItem("gameState", JSON.stringify(state));
};

export const clearGameState = (): void => {
  localStorage.removeItem("gameState");
  setGameState(defaultState);
  window.dispatchEvent(new CustomEvent("gameReset"));
  window.dispatchEvent(new CustomEvent("gameMove"));
};
