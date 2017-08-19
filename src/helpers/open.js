export default function opening(i, j) {
  if (this.props.game[i][j].value !== 'M' && !this.props.end && this.props.game[i][j].value === 0 && this.props.game[i][j].status === 'closed') {
    this.props.countDown();
    this.props.open(i, j)
    if(i !== 0 && i !== this.props.H - 1 && j !== 0 && j !== this.props.W - 1) {
      opening.bind(this)(i - 1, j - 1);
      opening.bind(this)(i - 1, j);
      opening.bind(this)(i - 1, j + 1);
      opening.bind(this)(i, j - 1);
      opening.bind(this)(i, j + 1);
      opening.bind(this)(i + 1, j - 1);
      opening.bind(this)(i + 1, j);
      opening.bind(this)(i + 1, j + 1);
    } else if(i === 0 && j === 0) {
      opening.bind(this)(i, j + 1);
      opening.bind(this)(i + 1, j + 1);
      opening.bind(this)(i + 1, j);
    } else if(i === this.props.H - 1 && j === 0) {
      opening.bind(this)(i, j + 1);
      opening.bind(this)(i - 1, j + 1);
      opening.bind(this)(i - 1, j);
    } else if(i === 0 && j === this.props.W - 1) {
      opening.bind(this)(i, j - 1);
      opening.bind(this)(i + 1, j - 1);
      opening.bind(this)(i + 1, j);
    } else if(i === this.props.H - 1 && j === this.props.W - 1) {
      opening.bind(this)(i, j - 1);
      opening.bind(this)(i - 1, j - 1);
      opening.bind(this)(i - 1, j);
    } else if(i === 0) {
      opening.bind(this)(i, j - 1);
      opening.bind(this)(i, j + 1);
      opening.bind(this)(i + 1, j - 1);
      opening.bind(this)(i + 1, j);
      opening.bind(this)(i + 1, j + 1);
    } else if(i === this.props.H - 1) {
      opening.bind(this)(i, j - 1);
      opening.bind(this)(i, j + 1);
      opening.bind(this)(i - 1, j - 1);
      opening.bind(this)(i - 1, j);
      opening.bind(this)(i - 1, j + 1);
    } else if(j === 0) {
      opening.bind(this)(i - 1, j);
      opening.bind(this)(i - 1, j + 1);
      opening.bind(this)(i, j + 1);
      opening.bind(this)(i + 1, j);
      opening.bind(this)(i + 1, j + 1);
    } else if(j === this.props.W - 1) {
      opening.bind(this)(i - 1, j);
      opening.bind(this)(i - 1, j - 1);
      opening.bind(this)(i, j - 1);
      opening.bind(this)(i + 1, j);
      opening.bind(this)(i + 1, j - 1);
    }
  } else if(this.props.game[i][j].value !== 'M' && !this.props.end  && this.props.game[i][j].status === 'closed') {
    this.props.countDown();
    this.props.open(i, j)
  } else if(this.props.game[i][j].value === 'M' && !this.props.end && !this.props.victoryStatus){
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
