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

export const getCurrentPlayer = (): "X" | "O" => {
  const state = getGameState();
  return state.currentPlayer;
};

export const clearGameState = (): void => {
  localStorage.removeItem("gameState");
  setGameState(defaultState);
};
