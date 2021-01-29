import React, { useContext } from 'react'
import Game from './game/Game'
import Lobby from './lobby/Lobby'

// context
import GameContext from '../context/game/gameContext'

const Home = () => {
  const gameContext = useContext(GameContext)
  // const { users, showModalCards } = gameContext

  return <Lobby />
}

export default Home
