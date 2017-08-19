import {
  CHANGE_PAGE,
  LOAD_STATE,
  GAME_OVER,
  SETUP_COUNTER,
  COUNT_DOWN,
  VICTORY,
  BLOCK_FIELD,
  DEBLOCK_FIELD,
  OPEN_FIELD,
  BOOM_FIELD,
  SETUP_H,
  SETUP_W
} from '../constants';


export function changePage(page) {
  return {
    type: CHANGE_PAGE,
    page
  }
}

export function setupH(h) {
  return {
    type: SETUP_H,
    h
  }
}

export function setupW(w) {
  return {
    type: SETUP_W,
    w
  }
}

export function block(i,j) {
  return {
    type: BLOCK_FIELD,
    i,
    j
  }
}



export function boom(i,j) {
  return {
    type: BOOM_FIELD,
    i,
    j
  }
}

export function open(i,j) {
  return {
    type: OPEN_FIELD,
    i,
    j
  }
}

export function deblock(i,j) {
  return {
    type: DEBLOCK_FIELD,
    i,
    j
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
