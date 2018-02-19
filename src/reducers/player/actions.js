export const ActionTypes = {
  SET_CURRENT_USER: 'quixx/player/SET_CURRENT_USER'
}

export const setCurrentUser = (player) => {
  return {
    type: ActionTypes.SET_CURRENT_USER,
    player
  }
}