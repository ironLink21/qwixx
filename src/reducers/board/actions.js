export const ActionTypes = {
  SET_X: 'quixx/board/SET_X'
}

export const setX = (number, color) => {
  return {
    type: ActionTypes.SET_X,
    number,
    color
  }
}