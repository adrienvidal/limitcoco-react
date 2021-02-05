import React, { useReducer } from 'react'
import GameContext from './gameContext'
import gameReducer from './gameReducer'
import io from 'socket.io-client'
import { createNewGame } from '../../gameManager'

const initialState = {
  game: null,
  room: null,
  userId: null,
}

const socket = io('http://localhost:5000')

const GameState = (props) => {
  const [state, dispatch] = useReducer(gameReducer, initialState)

  socket.on('connect', () => {
    // user id
    dispatch({ type: 'SET_USER_ID', payload: socket.id })

    // room
    socket.on('client:room:update', (newRoom) => {
      dispatch({ type: 'SET_ROOM_STATE', payload: newRoom })
    })

    // server gameState listener
    socket.on('client:game:update', (newState) => {
      console.log('client game update')
      dispatch({ type: 'SET_GAME_STATE', payload: newState })
    })
  })

  /** Fetch the current game state from the server when new user*/
  const joinGame = () => {
    return new Promise((resolve) => {
      socket.emit('server:game:join', (stateGame) => {
        dispatch({ type: 'SET_GAME_STATE', payload: stateGame })
        resolve(stateGame)
      })
    })
  }

  // Create newGame state in front
  const resetGame = (state) => {
    const playerIds = state.room.users
    const newGame = createNewGame(playerIds)

    return new Promise((resolve) => {
      socket.emit('server:game:update', newGame, () => {
        dispatch({ type: 'SET_GAME_STATE', payload: newGame })
        resolve(newGame)
      })
    })
  }

  return (
    <GameContext.Provider
      value={{
        state,
        joinGame,
        resetGame,
      }}
    >
      {props.children}
    </GameContext.Provider>
  )
}

export default GameState
