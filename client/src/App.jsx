import Game from './components/game/Game'


// context
import GameState from './context/game/GameState'

function App() {
  return (
    <GameState>
      <main>
        <Game />
      </main>
    </GameState>
  )
}

export default App
