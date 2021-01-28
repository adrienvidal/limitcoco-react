import React, { useContext } from 'react'
import Game from './game/Game'

// context
import GameContext from '../context/game/gameContext'

const Home = () => {
  const gameContext = useContext(GameContext)
  // const { users, showModalCards } = gameContext

  return <Game />
}

export default Home
