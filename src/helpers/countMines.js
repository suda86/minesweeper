export default function countMines(i, j, state) {
  let numOfMines = 0
  function addMine(a, b) {
    if( state[a][b].status === 'blocked') {
      numOfMines++;
    }
  }
    try {addMine(i - 1, j - 1)} catch (e) {}
    try {addMine(i - 1, j)} catch (e) {};
    try {addMine(i - 1, j + 1)} catch (e) {};
    try {addMine(i, j - 1)} catch (e) {};
    try {addMine(i, j + 1)} catch (e) {};
    try {addMine(i + 1, j - 1)} catch (e) {};
    try {addMine(i + 1, j)} catch (e) {};
    try {addMine(i + 1, j + 1)} catch (e) {};
  return numOfMines;
}
