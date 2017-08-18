import {
  CHANGE_PAGE,
  LOAD_STATE,
  GAME_OVER,
  SETUP_COUNTER,
  COUNT_DOWN,
  VICTORY
} from '../constants';

export function changePage(page) {
  return {
    type: CHANGE_PAGE,
    page
  }
}

export function loadState(payload) {
  return {
    type: LOAD_STATE,
    payload
  }
}

export function gameOver(payload) {
  return {
    type: GAME_OVER,
    payload
  }
}

export function setupCount(num) {
  return {
    type: SETUP_COUNTER,
    num
  }
}

export function countDown() {
  return {
    type: COUNT_DOWN
  }
}

export function victory(payload) {
  return {
    type: VICTORY,
    payload
  }
}
