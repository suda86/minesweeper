import {
  LOAD_STATE
} from '../constants'

export default function(state = [], action) {
  switch(action.type) {
    case LOAD_STATE :
      return action.payload ;
    default :
      return state;
  }
}
