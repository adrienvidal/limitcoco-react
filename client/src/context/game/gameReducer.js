const gameReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER_ID':
      return {
        ...state,
        userId: action.payload,
      }
    case 'SET_ROOM_STATE':
      return {
        ...state,
        room: action.payload,
      }
    case 'SET_GAME_STATE':
      return {
        ...state,
        game: action.payload,
      }
    case 'SET_MODAL_HANDS':
      return {
        ...state,
        game: action.payload,
      }

    default:
      return state
  }
}

export default gameReducer
