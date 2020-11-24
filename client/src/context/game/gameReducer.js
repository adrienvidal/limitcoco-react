import { SET_PHASE, SHOW_MODAL_CARDS, SELECT_CARDS } from '../types'

const contactReducer = (state, action) => {
  switch (action.type) {
    case SET_PHASE:
      return {
        ...state,
        phase: action.payload,
      }
    case SHOW_MODAL_CARDS:
      return {
        ...state,
        modalCards: action.payload,
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
