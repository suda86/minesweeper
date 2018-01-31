export default function countMines(i, j) {
  let numOfMines = 0;
  function addMine(a, b) {
    if( this.props.game[a][b].status === 'blocked') {
      numOfMines++;
    }
  }
    try {addMine.call(this, i - 1, j - 1)} catch (e) {}
    try {addMine.call(this, i - 1, j)} catch (e) {};
    try {addMine.call(this, i - 1, j + 1)} catch (e) {};
    try {addMine.call(this, i, j - 1)} catch (e) {};
    try {addMine.call(this, i, j + 1)} catch (e) {};
    try {addMine.call(this, i + 1, j - 1)} catch (e) {};
    try {addMine.call(this, i + 1, j)} catch (e) {};
    try {addMine.call(this, i + 1, j + 1)} catch (e) {};
  return numOfMines;
}
