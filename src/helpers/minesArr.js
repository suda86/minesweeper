export default function mines(a, b, num, random = Math.random){
  const arr = [];
  const minesArr = [];
  for(let i = 0; i < a * b; i ++ ) {
    arr.push(i);
  }
  for(let i = 0; i < num; i ++) {
    minesArr.push(arr.splice(Math.floor(random() * arr.length), 1)[0]);
  }
  return minesArr
}
