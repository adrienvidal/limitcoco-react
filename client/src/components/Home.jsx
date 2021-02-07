import React, { Fragment, useContext } from 'react'
import Game from './game/Game'
import Lobby from './lobby/Lobby'

// context
import GameContext from '../context/game/gameContext'

const Home = () => {
  const gameContext = useContext(GameContext)
  const { state, resetGame } = gameContext

  console.log('state: ', state)

  return (
    <Fragment>
      {state.game ? (
        <Fragment>
          <button onClick={() => resetGame(state)}>Reset</button>
          <Game />
        </Fragment>
      ) : (
        <Lobby />
      )}
    </Fragment>
  )
  // return <Lobby />
}

export default Home
