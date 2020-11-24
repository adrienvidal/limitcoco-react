import { SET_PHASE, SHOW_MODAL_CARDS } from '../types'

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
    default:
      return state
  }
}

export default contactReducer
