import {
  SETUP_MINES,
  PLUS_MINES,
  MINUS_MINES
} from '../constants'

export default function(state = 0, actions) {
  switch(actions.type) {
    case SETUP_MINES :
      return actions.num;
    case PLUS_MINES :
      return state + 1;
    case MINUS_MINES :
      return state - 1;
    default :
      return state
  }
}
