export default function opening(i, j) {
  if (this.props.game[i][j].value !== 'M' && !this.props.end && this.props.game[i][j].value === 0 && this.props.game[i][j].status === 'closed') {
    this.props.countDown();
    this.props.open(i, j)
      try {opening.call(this, i - 1, j - 1)} catch(e){}
      try {opening.call(this, i - 1, j)} catch(e){}
      try {opening.call(this, i - 1, j + 1)} catch(e){}
      try {opening.call(this, i, j - 1)} catch(e){}
      try {opening.call(this, i, j + 1)} catch(e){}
      try {opening.call(this, i + 1, j - 1)} catch(e){}
      try {opening.call(this, i + 1, j)} catch(e){}
      try {  opening.call(this, i + 1, j + 1)} catch(e){}
    
  } else if(this.props.game[i][j].value !== 'M' && !this.props.end  && this.props.game[i][j].status === 'closed') {
    this.props.countDown();
    this.props.open(i, j)
  } else if(this.props.game[i][j].value === 'M' && !this.props.end && !this.props.victoryStatus  && this.props.game[i][j].status !== 'blocked'){
    this.props.boom(i, j);
    this.props.gameOver(true);
    for(let i = 0; i < this.props.H; i ++) {
      for(let j = 0; j < this.props.W; j ++) {
        if(this.props.game[i][j].value === 'M') {
          this.props.boom(i, j)
        }
      }
    }
  }
}
