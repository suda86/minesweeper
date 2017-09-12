export default function countMines(i, j) {
  let numOfMines = 0;
  function addMine(a, b) {
    if( this.props.game[a][b].status === 'blocked') {
      numOfMines++;
    }
  }
  if(i !== 0 && i !== this.props.H - 1 && j !== 0 && j !== this.props.W - 1) {
    addMine.bind(this)(i - 1, j - 1);
    addMine.bind(this)(i - 1, j);
    addMine.bind(this)(i - 1, j + 1);
    addMine.bind(this)(i, j - 1);
    addMine.bind(this)(i, j + 1);
    addMine.bind(this)(i + 1, j - 1);
    addMine.bind(this)(i + 1, j);
    addMine.bind(this)(i + 1, j + 1);
  } else if(i === 0 && j === 0) {
    addMine.bind(this)(i, j + 1);
    addMine.bind(this)(i + 1, j + 1);
    addMine.bind(this)(i + 1, j);
  } else if(i === this.props.H - 1 && j === 0) {
    addMine.bind(this)(i, j + 1);
    addMine.bind(this)(i - 1, j + 1);
    addMine.bind(this)(i - 1, j);
  } else if(i === 0 && j === this.props.W - 1) {
    addMine.bind(this)(i, j - 1);
    addMine.bind(this)(i + 1, j - 1);
    addMine.bind(this)(i + 1, j);
  } else if(i === this.props.H - 1 && j === this.props.W - 1) {
    addMine.bind(this)(i, j - 1);
    addMine.bind(this)(i - 1, j - 1);
    addMine.bind(this)(i - 1, j);
  } else if(i === 0) {
    addMine.bind(this)(i, j - 1);
    addMine.bind(this)(i, j + 1);
    addMine.bind(this)(i + 1, j - 1);
    addMine.bind(this)(i + 1, j);
    addMine.bind(this)(i + 1, j + 1);
  } else if(i === this.props.H - 1) {
    addMine.bind(this)(i, j - 1);
    addMine.bind(this)(i, j + 1);
    addMine.bind(this)(i - 1, j - 1);
    addMine.bind(this)(i - 1, j);
    addMine.bind(this)(i - 1, j + 1);
  } else if(j === 0) {
    addMine.bind(this)(i - 1, j);
    addMine.bind(this)(i - 1, j + 1);
    addMine.bind(this)(i, j + 1);
    addMine.bind(this)(i + 1, j);
    addMine.bind(this)(i + 1, j + 1);
  } else if(j === this.props.W - 1) {
    addMine.bind(this)(i - 1, j);
    addMine.bind(this)(i - 1, j - 1);
    addMine.bind(this)(i, j - 1);
    addMine.bind(this)(i + 1, j);
    addMine.bind(this)(i + 1, j - 1);
  }
  return numOfMines;
}
