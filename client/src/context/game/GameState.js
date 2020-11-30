import React, { useReducer } from 'react'
import GameContext from './gameContext'
import gameReducer from './gameReducer'
import io from 'socket.io-client'

const initialState = {
  gameState: null,
  room: null,
  userId: null
}

const socket = io('http://localhost:5000')

const GameState = (props) => {

  const [state, dispatch] = useReducer(gameReducer, initialState)

  socket.on("connect", () => {
    dispatch("SET_USER_ID", { payload: socket.id });
  });

  socket.on("game:update", newState => {
    dispatch("SET_GAME_STATE", { payload: newState });
  });

  socket.on("room:update", newRoom => {
    dispatch("SET_ROOM_STATE", { payload: newRoom });
  });

  /** Fetch the current game state from the server */
  const joinGame = () => {
    return new Promise(resolve => {
      socket.emit("game:join", gameState => {
        dispatch("SET_GAME_STATE", gameState);
        resolve(gameState);
      });
    });
  }

  return (
    <GameContext.Provider
      value={{
        state,
        joinGame
      }}
    >
      {props.children}
    </GameContext.Provider>
  )
}


export default GameState
