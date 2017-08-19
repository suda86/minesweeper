import { combineReducers } from 'redux';

import pageReducer from './page_reducer';
import gameReducer from './game_reducer';
import endReducer from './end_reducer';
import mines from './mines_reducer'
import H from './H_reducer';
import W from './W_reducer';
import { victoryStatus, victoryCount } from './victory_reducer'

const reducer = combineReducers({
  page: pageReducer,
  game: gameReducer,
  end: endReducer,
  victoryStatus: victoryStatus,
  victoryCount: victoryCount,
  H,
  W,
  mines
})

export default reducer;
