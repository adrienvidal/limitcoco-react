import React, { useReducer } from 'react'
import GameContext from './gameContext'
import gameReducer from './gameReducer'
import {
  INIT_SOCKET_CONNECT,
  SET_NEW_PLAYER,
  SET_PHASE,
  SHOW_MODAL_CARDS,
  SELECT_CARDS,
} from '../types'
import io from 'socket.io-client'

const GameState = (props) => {
  var socket = null
  const initialState = {
    users: [
      {
        id: 1,
        name: 'John',
        phase: 'start',
        modalCards: false,
        score: 0,
        statut: 'wait',
        isYou: true,
        isKing: false,
        cards: [
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
      },
      {
        id: 2,
        name: 'Jess',
        phase: 'start',
        modalCards: false,
        score: 0,
        statut: 'wait',
        isYou: false,
        isKing: false,
        cards: [
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
        ],
      },
      {
        id: 3,
        name: 'Fred',
        phase: 'start',
        modalCards: false,
        score: 0,
        statut: 'wait',
        isYou: false,
        isKing: true,
        cards: [
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
        ],
      },
    ],
    currentQuestion: {
      id: 1,
      desc: '____ a mangé un burger aux fraises',
      answers: 1,
      type: 'question',
    },
    questionsDeck: [],
    answersDeck: [],
    numPlayers: 3,
  }

  const [state, dispatch] = useReducer(gameReducer, initialState)

  //Init New User
  const initSocketConnection = () => {
    socket = io('http://localhost:5000')
    socket.on('connect', () => {
      // connexion
      socket.on('game:join', (serverState) => {
        console.log('Connexion: ', serverState)

        // dispatch({ type: SET_NEW_PLAYER, payload: state })
      })

      // Update (update game / deconnexion)
      socket.on('game:update', (newState) => {
        console.log('Update: ', newState)
      })
    })
  }

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
        numPlayers: state.numPlayers,
        initSocketConnection,
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
