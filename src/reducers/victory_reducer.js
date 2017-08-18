import {
  COUNT_DOWN,
  SETUP_COUNTER,
  VICTORY
} from '../constants'

export function victoryStatus(state = false, action) {
  switch(action.type) {
    case VICTORY :
      return action.payload ;
    default :
      return state;
  }
}

export function victoryCount(state = 1, action) {
  switch(action.type) {
    case SETUP_COUNTER :
      return action.num ;
    case COUNT_DOWN :
      return state - 1 ;
    default :
      return state
  }
}
