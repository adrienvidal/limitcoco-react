import React, { useReducer } from 'react'
import GameContext from './gameContext'
import gameReducer from './gameReducer'
import {
  SET_LOBBY,
  SET_NEW_PLAYER,
  SET_PHASE,
  SHOW_MODAL_CARDS,
  SELECT_CARDS,
} from '../types'
import io from 'socket.io-client'

const GameState = (props) => {
  var socket = null
  const initialState = {
    gameStarted: false,
    lobby: [
      {
        id: 1,
        name: 'John',
      },
      {
        id: 2,
        name: 'Vanessa',
      },
    ],
    users: [],
    currentQuestion: {
      id: 1,
      desc: '____ a mangé un burger aux fraises',
      answers: 1,
      type: 'question',
    },
    questionsDeck: [],
    answersDeck: [
      {
        id: 1,
        desc: 'Le slip de Jean-Pierre',
        type: 'answer',
        isSelected: false,
        isPlayed: false,
      },
      {
        id: 2,
        desc: 'Le slip de Jean-Pierre2',
        type: 'answer',
        isSelected: false,
        isPlayed: false,
      },
      {
        id: 3,
        desc: 'Le slip de Jean-Pierre3',
        type: 'answer',
        isSelected: false,
        isPlayed: false,
      },
      {
        id: 4,
        desc: 'Le slip de Jean-Pierre4',
        type: 'answer',
        isSelected: false,
        isPlayed: false,
      },
      {
        id: 5,
        desc: 'Le slip de Jean-Pierre5',
        type: 'answer',
        isSelected: false,
        isPlayed: false,
      },
      {
        id: 6,
        desc: 'Le slip de Jean-Pierre5',
        type: 'answer',
        isSelected: false,
        isPlayed: false,
      },
      {
        id: 7,
        desc: 'Le slip de Jean-Pierre5',
        type: 'answer',
        isSelected: false,
        isPlayed: false,
      },
      {
        id: 8,
        desc: 'Le slip de Jean-Pierre5',
        type: 'answer',
        isSelected: false,
        isPlayed: false,
      },
      {
        id: 9,
        desc: 'Le slip de Jean-Pierre5',
        type: 'answer',
        isSelected: false,
        isPlayed: false,
      },
      {
        id: 10,
        desc: 'Le slip de Jean-Pierre5',
        type: 'answer',
        isSelected: false,
        isPlayed: false,
      },
    ],
  }

  const [state, dispatch] = useReducer(gameReducer, initialState)

  //Set Lobby
  const setLobby = (name) => {
    socket = io('http://localhost:5000')
    socket.on('connect', () => {
      // connexion
      socket.on('game:join', (serverState, newId) => {
        console.log('Connexion: ', serverState, newId)
        dispatch({ type: SET_LOBBY, payload: { name, newId } })
      })

      // Update (update game / deconnexion)
      socket.on('game:update', (newState) => {
        console.log('Update: ', newState)
      })
    })
  }

  /* const setNewPlayer = () => {
    //TODO: get name field
    const newUser = {
      id: newId,
      name: 'John',
      phase: 'start',
      modalCards: false,
      score: 0,
      isYou: false,
      isKing: false,
      cards: [],
    }

    dispatch({ type: SET_NEW_PLAYER, payload: newUser })
  } */

  // Change phase
  const setPhase = (phase) => {
    dispatch({ type: SET_PHASE, payload: phase })
  }

  // Show modal cards choice
  const showModalCards = (isShown) => {
    dispatch({ type: SHOW_MODAL_CARDS, payload: isShown })
  }

  // Show modal cards choice
  const selectCard = (userId, cardId) => {
    dispatch({ type: SELECT_CARDS, payload: { userId, cardId } })
  }

  return (
    <GameContext.Provider
      value={{
        users: state.users,
        currentQuestion: state.currentQuestion,
        questionsDeck: state.questionsDeck,
        answersDeck: state.answersDeck,
        setLobby,
        setPhase,
        showModalCards,
        selectCard,
      }}
    >
      {props.children}
    </GameContext.Provider>
  )
}

export default GameState
