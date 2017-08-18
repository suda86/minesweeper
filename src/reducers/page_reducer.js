import {
  CHANGE_PAGE
} from '../constants'

export default function(state = 'start', action) {
  switch(action.type) {
    case CHANGE_PAGE :
      return action.page ;
    default:
      return state
  }
}
