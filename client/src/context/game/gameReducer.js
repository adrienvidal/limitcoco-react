import { SET_PHASE } from '../types'

const contactReducer = (state, action) => {
  switch (action.type) {
    case SET_PHASE:
      return {
        ...state,
        phase: action.payload,
      }
    default:
      return state
  }
}

export default contactReducer
