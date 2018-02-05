export default function countMines(i, j, state) {
  let numOfMines = 0
  function addMine(a, b) {
    state = state || this.props.game
    if( state[a][b].status === 'blocked') {
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
