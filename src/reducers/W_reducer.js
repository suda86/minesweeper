import { SETUP_W } from '../constants'

export default function(state = 0, action) {
  switch(action.type) {
    case SETUP_W :
      return action.w ;
    default :
      return state;
  }
}
