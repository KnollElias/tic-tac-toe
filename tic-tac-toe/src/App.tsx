import GameHeader from "./components/gameBoard/gameHeader";
import GameState from "./components/gameBoard/gameState";
import GameWinner from "./components/gameBoard/GameWinner";
import "./App.css";

function App() {
  return (
    <div className="App">
      <GameHeader />
      <GameState />
      <GameWinner />
    </div>
  );
}

export default App;
