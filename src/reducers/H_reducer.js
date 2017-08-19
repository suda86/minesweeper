import { SETUP_H } from '../constants'

export default function(state = 0, action) {
  switch(action.type) {
    case SETUP_H :
      return action.h ;
    default :
      return state;
  }
}
