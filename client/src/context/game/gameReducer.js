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
      // TODO
      // -------------------
      // get your data
      // const userYou = state.users.find((user) => user.isYou)

      /* const test = {
        ...state,
        users: state.users.map((user) => {
          if (user.isYou) {
            const newCards = user.cards.map((card) => {
              if (card.id === action.payload.cardId) {
                card.isSelected = !card.isSelected
                return card
              } else {
                return card
              }
            })

            user.cards = newCards
            debugger
            return user
          } else {
            debugger
            return user
          }
        }),
      } */

      const currentUser = state.users.find((user) => user.isYou)
      const cards = currentUser.cards.map((card) => {
        if (card.id === action.payload.cardId) {
          card.isSelected = true
        }
        return card
      })

      console.log('currentUser', currentUser)
      console.log('cards', cards)

      return state
    default:
      return state
  }
}

export default contactReducer
