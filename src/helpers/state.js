import getMines from './minesArr';

export function getState(a, b, num) {
  const mines = getMines(a, b, num);
  const state = [];
  for(let i = 0; i < a; i ++) {
    state.push([]);
    for(let j = 0; j < b; j ++ ){
      state[i][j] = {value: 'O', status: 'closed'};
    }
  }
  for(let i = 0; i < mines.length; i ++) {
    state[Math.floor(mines[i] / b)][mines[i] % b].value = 'M';
  }
  for(let i = 0; i < a; i ++) {
    for( let j = 0; j < b; j ++) {
      if(state[i][j].value !== 'M') {
          let num = 0;
          try {if(state[i -1][j - 1].value && state[i -1][j - 1].value === 'M') {
            num ++;
          }} catch(e){}
          try {if(state[i -1][j].value && state[i -1][j].value === 'M') {
            num ++;
          }} catch(e) {}
          try {if(state[i -1][j +1].value && state[i -1][j +1].value === 'M') {
            num ++;
          }} catch(e) {}
          try {if(state[i][j - 1].value && state[i][j -1].value === 'M') {
            num ++;
          }} catch(e) {}
          try {if(state[i][j +1].value && state[i][j + 1].value === 'M') {
            num ++;
          }} catch(e) {}
          try {if(state[i +1][j - 1].value && state[i +1][j - 1].value === 'M') {
            num ++;
          }} catch(e) {}
          try {if(state[i +1][j].value && state[i +1][j].value === 'M') {
            num ++;
          }} catch(e) {}
          try {if(state[i +1][j + 1].value && state[i +1][j + 1].value === 'M') {
            num ++;
          }} catch(e) {}
          state[i][j].value = num;
      }
    }
  }
  return state;
}
