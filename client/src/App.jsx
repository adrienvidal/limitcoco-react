import Home from './components/pages/Home'

// context
import GameState from './context/game/GameState'

function App() {
  return (
    <GameState>
      <main>
        <Home />
      </main>
    </GameState>
  )
}

export default App
