import {
  INIT_SOCKET_CONNECT,
  SET_NEW_PLAYER,
  SET_PHASE,
  SHOW_MODAL_CARDS,
  SELECT_CARDS,
} from '../types'

const contactReducer = (state, action) => {
  switch (action.type) {
    case INIT_SOCKET_CONNECT:
      return state
    case SET_NEW_PLAYER:
      return state
    case SET_PHASE:
      return {
        ...state,
        users: state.users.map((user) =>
          user.isYou ? { ...user, phase: action.payload } : user
        ),
      }
    case SHOW_MODAL_CARDS:
      return {
        ...state,
        users: state.users.map((user) =>
          user.isYou ? { ...user, modalCards: action.payload } : user
        ),
      }
    case SELECT_CARDS:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.userId
            ? {
                ...user,
                cards: user.cards.map((card) =>
                  card.id === action.payload.cardId
                    ? { ...card, isSelected: !card.isSelected }
                    : card
                ),
              }
            : user
        ),
      }
    default:
      return state
  }
}

// state.users[indexUser] : true

export default contactReducer
