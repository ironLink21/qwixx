import { ActionTypes } from './actions'

const initialState = {
  numberLines: {
    red: { },
    yellow: { },
    green: { },
    blue: { }
  }
}

export default BoardReducer = (state = initialState, action) => {
  switch(action.type) {
    case ActionTypes.SET_X:
      const number = action.number
      const color = action.color
      return { ...state }
      break

    default:
      return state
  }
}