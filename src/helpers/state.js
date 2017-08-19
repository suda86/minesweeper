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
        if(i !== 0 && i !== (a - 1) && j !== 0 && j !== (b - 1)) {
          let num = 0;
          if(state[i -1][j - 1].value && state[i -1][j - 1].value === 'M') {
            num ++;
          }
          if(state[i -1][j].value && state[i -1][j].value === 'M') {
            num ++;
          }
          if(state[i -1][j +1].value && state[i -1][j +1].value === 'M') {
            num ++;
          }
          if(state[i][j - 1].value && state[i][j -1].value === 'M') {
            num ++;
          }
          if(state[i][j +1].value && state[i][j + 1].value === 'M') {
            num ++;
          }
          if(state[i +1][j - 1].value && state[i +1][j - 1].value === 'M') {
            num ++;
          }
          if(state[i +1][j].value && state[i +1][j].value === 'M') {
            num ++;
          }
          if(state[i +1][j + 1].value && state[i +1][j + 1].value === 'M') {
            num ++;
          }
          state[i][j].value = num;
        } else if(i === 0 && j !== 0 && j !== (b - 1)) {
          let num = 0;
          if(state[i][j - 1].value && state[i][j -1].value === 'M') {
            num ++;
          }
          if(state[i][j +1].value && state[i][j + 1].value === 'M') {
            num ++;
          }
          if(state[i +1][j - 1].value && state[i +1][j - 1].value === 'M') {
            num ++;
          }
          if(state[i +1][j].value && state[i +1][j].value === 'M') {
            num ++;
          }
          if(state[i +1][j + 1].value && state[i +1][j + 1].value === 'M') {
            num ++;
          }
          state[i][j].value = num;
        } else if(i === 0 && j === 0) {
          let num = 0;
          if(state[1][0].value === 'M') {
            num ++;
          }
          if(state[1][1].value === 'M') {
            num ++;
          }
          if(state[0][1].value === 'M') {
            num ++;
          }
          state[i][j].value = num;
        } else if(i === 0 && j === (b - 1)) {
          let num = 0;
          if(state[1][j].value === 'M') {
            num ++;
          }
          if(state[1][j - 1].value === 'M') {
            num ++;
          }
          if(state[0][j - 1].value === 'M') {
            num ++;
          }
          state[i][j].value = num;
        } else if(i === (a - 1) && j !== 0 && j !== (b - 1)) {
          let num = 0;
          if(state[i -1][j - 1].value && state[i -1][j - 1].value === 'M') {
            num ++;
          }
          if(state[i -1][j].value && state[i -1][j].value === 'M') {
            num ++;
          }
          if(state[i -1][j +1].value && state[i -1][j +1].value === 'M') {
            num ++;
          }
          if(state[i][j - 1].value && state[i][j -1].value === 'M') {
            num ++;
          }
          if(state[i][j +1].value && state[i][j + 1].value === 'M') {
            num ++;
          }
          state[i][j].value = num;
        } else if(i === (a - 1) && j === 0) {
          let num = 0;
          if(state[i - 1][0].value === 'M') {
            num ++;
          }
          if(state[i - 1][1].value === 'M') {
            num ++;
          }
          if(state[i][1].value === 'M') {
            num ++;
          }
          state[i][j].value = num;
        } else if(i === (a - 1) && j === (b - 1)) {
          let num = 0;
          if(state[i - 1][j].value === 'M') {
            num ++;
          }
          if(state[i - 1][j - 1].value === 'M') {
            num ++;
          }
          if(state[i][j - 1].value === 'M') {
            num ++;
          }
          state[i][j].value = num;
        } else if(j === 0 && i !== 0 && i !== a - 1) {
          let num = 0;
          if(state[i - 1][j].value === 'M') {
            num ++;
          }
          if(state[i - 1][j + 1].value === 'M') {
            num ++;
          }
          if(state[i][j + 1].value === 'M') {
            num ++;
          }
          if(state[i + 1][j].value === 'M') {
            num ++;
          }
          if(state[i + 1][j + 1].value === 'M') {
            num ++;
          }
          state[i][j].value = num;
        } else if(j === b - 1 && i !== 0 && i !== a - 1) {
          let num = 0;
          if(state[i - 1][j].value === 'M') {
            num ++;
          }
          if(state[i - 1][j - 1].value === 'M') {
            num ++;
          }
          if(state[i][j - 1].value === 'M') {
            num ++;
          }
          if(state[i + 1][j].value === 'M') {
            num ++;
          }
          if(state[i + 1][j - 1].value === 'M') {
            num ++;
          }
          state[i][j].value = num;
        }
      }
    }
  }
  return state;
}
