import {
  LOAD_STATE,
  BLOCK_FIELD,
  DEBLOCK_FIELD,
  OPEN_FIELD,
  BOOM_FIELD
} from '../constants'

export default function(state = [], action) {
  switch(action.type) {
    case LOAD_STATE :
      return action.payload ;
    case BLOCK_FIELD :
      const newState = [...state];
      newState[action.i][action.j].status = 'blocked';
      return newState;
    case DEBLOCK_FIELD :
      const newwState = [...state];
      newwState[action.i][action.j].status = 'closed';
      return newwState;
    case OPEN_FIELD :
      const newwwState = [...state];
      newwwState[action.i][action.j].status = 'opened';
      return newwwState;
    case BOOM_FIELD :
      const newwwwState = [...state];
      newwwwState[action.i][action.j].status = 'mine';
      return newwwwState;
    default :
      return state;
  }
}
