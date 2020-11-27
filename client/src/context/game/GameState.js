import React, { useReducer, useEffect } from 'react'
import GameContext from './gameContext'
import gameReducer from './gameReducer'
import { SET_PHASE, SHOW_MODAL_CARDS, SELECT_CARDS } from '../types'

import io from 'socket.io-client'

const GameState = (props) => {
  useEffect(() => {
    const socket = io('http://localhost:5000')
    socket.on('connect', () => {
      console.log('New User', socket.id)
    })
  }, [])

  const initialState = {
    // phase |start|game|winner
    phase: 'game',
    users: [
      {
        id: 1,
        name: 'John',
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
    currentPlayer: 1,
    numPlayers: 3,
    modalCards: false,
  }

  const [state, dispatch] = useReducer(gameReducer, initialState)

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
        phase: state.phase,
        users: state.users,
        currentQuestion: state.currentQuestion,
        questionsDeck: state.questionsDeck,
        answersDeck: state.answersDeck,
        currentPlayer: state.currentPlayer,
        numPlayers: state.numPlayers,
        modalCards: state.modalCards,
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
