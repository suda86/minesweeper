export default function opening({ i, j, ...props}) {
  if (props.game[i][j].value !== 'M' && !props.end && props.game[i][j].value === 0 && props.game[i][j].status === 'closed') {
    props.countDown();
    props.open(i, j)
      try {opening({i: i - 1, j: j - 1, ...props})} catch(e){}
      try {opening({i: i - 1, j: j, ...props})} catch(e){}
      try {opening({i: i - 1, j: j + 1, ...props})} catch(e){}
      try {opening({i: i, j: j - 1, ...props})} catch(e){}
      try {opening({i: i, j: j + 1, ...props})} catch(e){}
      try {opening({i: i + 1, j: j - 1, ...props})} catch(e){}
      try {opening({i: i + 1, j: j, ...props})} catch(e){}
      try {opening({i: i + 1, j: j + 1, ...props})} catch(e){}
    
  } else if(props.game[i][j].value !== 'M' && !props.end  && props.game[i][j].status === 'closed') {
    props.countDown();
    props.open(i, j)
  } else if(props.game[i][j].value === 'M' && !props.end && !props.victoryStatus  && props.game[i][j].status !== 'blocked'){
    props.boom(i, j);
    props.gameOver(true);
    for(let i = 0; i < props.H; i ++) {
      for(let j = 0; j < props.W; j ++) {
        if(props.game[i][j].value === 'M') {
          props.boom(i, j)
        }
      }
    }
  }
}
