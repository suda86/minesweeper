import getMines from './minesArr';

export function getState(a, b, num) {
  const mines = getMines(a, b, num);
  const state = [];
  for(let i = 0; i < a; i ++) {
    state.push([]);
    for(let j = 0; j < b; j ++ ){
      state[i][j] = 'O';
    }
  }
  for(let i = 0; i < mines.length; i ++) {
    state[Math.floor(mines[i] / b)][mines[i] % b] = 'M';
  }
  for(let i = 0; i < a; i ++) {
    for( let j = 0; j < b; j ++) {
      if(state[i][j] !== 'M') {
        if(i !== 0 && i !== a - 1) {
          let num = 0;
          if(state[i -1][j - 1] && state[i -1][j - 1] === 'M') {
            num ++;
          }
          if(state[i -1][j] && state[i -1][j] === 'M') {
            num ++;
          }
          if(state[i -1][j +1] && state[i -1][j +1] === 'M') {
            num ++;
          }
          if(state[i][j - 1] && state[i][j -1] === 'M') {
            num ++;
          }
          if(state[i][j +1] && state[i][j + 1] === 'M') {
            num ++;
          }
          if(state[i +1][j - 1] && state[i +1][j - 1] === 'M') {
            num ++;
          }
          if(state[i +1][j] && state[i +1][j] === 'M') {
            num ++;
          }
          if(state[i +1][j + 1] && state[i +1][j + 1] === 'M') {
            num ++;
          }
          state[i][j] = num;
        } else if(i === 0) {
          let num = 0;
          if(state[i][j - 1] && state[i][j -1] === 'M') {
            num ++;
          }
          if(state[i][j +1] && state[i][j + 1] === 'M') {
            num ++;
          }
          if(state[i +1][j - 1] && state[i +1][j - 1] === 'M') {
            num ++;
          }
          if(state[i +1][j] && state[i +1][j] === 'M') {
            num ++;
          }
          if(state[i +1][j + 1] && state[i +1][j + 1] === 'M') {
            num ++;
          }
          state[i][j] = num;
        } else if(i === a - 1) {
          let num = 0;
          if(state[i -1][j - 1] && state[i -1][j - 1] === 'M') {
            num ++;
          }
          if(state[i -1][j] && state[i -1][j] === 'M') {
            num ++;
          }
          if(state[i -1][j +1] && state[i -1][j +1] === 'M') {
            num ++;
          }
          if(state[i][j - 1] && state[i][j -1] === 'M') {
            num ++;
          }
          if(state[i][j +1] && state[i][j + 1] === 'M') {
            num ++;
          }
          state[i][j] = num;
        }
      }
    }
  }
  return state;
}
