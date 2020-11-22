import React, { useReducer } from 'react'
import GameContext from './gameContext'
import gameReducer from './gameReducer'
import { GET_PLAYERS } from '../types'

const GameState = (props) => {
  const initialState = {
    players: [
      {
        id: 1,
        name: 'John',
        score: 0,
        statut: 'wait',
      },
      {
        id: 2,
        name: 'Jess',
        score: 0,
        statut: 'wait',
      },
      {
        id: 3,
        name: 'Fred',
        score: 0,
        statut: 'wait',
      },
    ],
  }

  const [state, dispatch] = useReducer(gameReducer, initialState)

  // Get players

  return (
    <GameContext.Provider
      value={{
        players: state.players,
      }}
    >
      {props.children}
    </GameContext.Provider>
  )
}

export default GameState
