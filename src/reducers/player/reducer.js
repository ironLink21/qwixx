import { ActionTypes } from './actions'

const initialState = {
  player: {}
}

export default PlayerReducer = (state = initialState, action) => {
  switch(action.type) {
    case ActionTypes.SET_CURRENT_USER:
      return { ...state, player: action.player }
      break

    default:
      return state
  }
}