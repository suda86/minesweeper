import {
  GAME_OVER
} from '../constants'

export default function(state = false, action) {
  switch(action.type) {
    case GAME_OVER :
      return action.payload ;
    default :
      return state
  }
}
