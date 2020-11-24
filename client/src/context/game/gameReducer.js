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

      const test = state.users.map((user) => user)
      /* const test = {
        ...state,
        users: state.users.map((user) => (user.isYou ? true : false)),
      } */

      console.log('test', test)

      return state
    default:
      return state
  }
}

export default contactReducer
