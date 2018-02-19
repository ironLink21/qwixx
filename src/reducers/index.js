import { combineReducers }  from 'redux'
import player               from './player/reducer'
import board                from './board/reducer'

const rootReducer = combineReducers({
  player,
  board
})

export default rootReducer
