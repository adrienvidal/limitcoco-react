import React, { useReducer } from 'react'
import GameContext from './gameContext'
import gameReducer from './gameReducer'
import { isEverybodyPlayed } from './../utils'
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

  const showModalHands = (action) => {
    state.game.modalHands[state.userId] = action
    return new Promise((resolve) => {
      socket.emit('server:game:update', state.game, () => {
        dispatch({ type: 'SET_GAME_STATE', payload: state.game })
        resolve(state.game)
      })
    })
  }

  const changePhaseGame = (newPhase) => {
    // 0 => players choose answers cards
    // 1 => King choose his favorite answer(s)
    // 2 => score & restart

    const { phase } = state.game
    switch (newPhase) {
      case 1:
        if (phase.phaseGame === 0 && isEverybodyPlayed(phase)) {
          phase.phaseGame = newPhase
        }
        break
      case 2:
        if (phase.phaseGame === 1) {
          phase.phaseGame = newPhase
        }
        break
      default:
        break
    }

    return new Promise((resolve) => {
      socket.emit('server:game:update', state.game, () => {
        dispatch({ type: 'SET_GAME_STATE', payload: state.game })
        resolve(state.game)
      })
    })
  }

  const changePhasePlayer = (bool) => {
    state.game.phase.phasePlayer.find(
      (e) => e.id === state.userId
    ).hasPlayed = bool

    changePhaseGame(1)

    return new Promise((resolve) => {
      socket.emit('server:game:update', state.game, () => {
        dispatch({ type: 'SET_GAME_STATE', payload: state.game })
        resolve(state.game)
      })
    })
  }

  const selectCard = (id) => {
    const playableCard = 1
    const currentCard = state.game.hands[state.userId].find((e) => e.id === id)
    const isCurrentCardSelected = currentCard.selection === 1
    const answersSelected = state.game.hands[state.userId].filter(
      (e) => e.selection === 1
    )
    const areAllAnswersSelected = answersSelected.length === playableCard

    if (isCurrentCardSelected) {
      currentCard.selection = 0
    } else if (!areAllAnswersSelected && !isCurrentCardSelected) {
      currentCard.selection = 1
    }

    return new Promise((resolve) => {
      socket.emit('server:game:update', state.game, () => {
        dispatch({ type: 'SET_GAME_STATE', payload: state.game })
        resolve(state.game)
      })
    })
  }

  const submitCard = () => {
    const hands = state.game.hands[state.userId]
    for (var i in hands) {
      if (hands[i].selection === 1) {
        hands[i].selection = 2
      }
    }

    // close modal
    showModalHands(false)
    changePhasePlayer(true)

    return new Promise((resolve) => {
      socket.emit('server:game:update', state.game, () => {
        dispatch({ type: 'SET_GAME_STATE', payload: state.game })
        resolve(state.game)
      })
    })
  }

  const pushPlayersAnswers = () => {
    for (const userId in state.game.hands) {
      // get players answers cards
      const playerAnswer = state.game.hands[userId].filter(
        (e) => e.selection === 2
      )

      // remove cards from player hands
      playerAnswer.forEach((f) =>
        state.game.hands[userId].splice(
          state.game.hands[userId].findIndex((e) => e.id === f.id),
          1
        )
      )

      // add to king board
      state.game.king.playersAnswers[userId] = playerAnswer
    }

    return new Promise((resolve) => {
      socket.emit('server:game:update', state.game, () => {
        dispatch({ type: 'SET_GAME_STATE', payload: state.game })
        resolve(state.game)
      })
    })
  }

  const showModalKing = (action, userId = null) => {
    state.game.modalKing = {
      isActive: action,
      userId: userId,
    }

    return new Promise((resolve) => {
      socket.emit('server:game:update', state.game, () => {
        dispatch({ type: 'SET_GAME_STATE', payload: state.game })
        resolve(state.game)
      })
    })
  }

  return (
    <GameContext.Provider
      value={{
        state,
        joinGame,
        resetGame,
        showModalHands,
        selectCard,
        submitCard,
        pushPlayersAnswers,
        showModalKing,
      }}
    >
      {props.children}
    </GameContext.Provider>
  )
}

export default GameState
