import open from './open';

export default function openAround(i, j) {
  if(i !== 0 && i !== this.props.H - 1 && j !== 0 && j !== this.props.W - 1) {
    open.bind(this)(i - 1, j - 1);
    open.bind(this)(i - 1, j);
    open.bind(this)(i - 1, j + 1);
    open.bind(this)(i, j - 1);
    open.bind(this)(i, j + 1);
    open.bind(this)(i + 1, j - 1);
    open.bind(this)(i + 1, j);
    open.bind(this)(i + 1, j + 1);
  } else if(i === 0 && j === 0) {
    open.bind(this)(i, j + 1);
    open.bind(this)(i + 1, j + 1);
    open.bind(this)(i + 1, j);
  } else if(i === this.props.H - 1 && j === 0) {
    open.bind(this)(i, j + 1);
    open.bind(this)(i - 1, j + 1);
    open.bind(this)(i - 1, j);
  } else if(i === 0 && j === this.props.W - 1) {
    open.bind(this)(i, j - 1);
    open.bind(this)(i + 1, j - 1);
    open.bind(this)(i + 1, j);
  } else if(i === this.props.H - 1 && j === this.props.W - 1) {
    open.bind(this)(i, j - 1);
    open.bind(this)(i - 1, j - 1);
    open.bind(this)(i - 1, j);
  } else if(i === 0) {
    open.bind(this)(i, j - 1);
    open.bind(this)(i, j + 1);
    open.bind(this)(i + 1, j - 1);
    open.bind(this)(i + 1, j);
    open.bind(this)(i + 1, j + 1);
  } else if(i === this.props.H - 1) {
    open.bind(this)(i, j - 1);
    open.bind(this)(i, j + 1);
    open.bind(this)(i - 1, j - 1);
    open.bind(this)(i - 1, j);
    open.bind(this)(i - 1, j + 1);
  } else if(j === 0) {
    open.bind(this)(i - 1, j);
    open.bind(this)(i - 1, j + 1);
    open.bind(this)(i, j + 1);
    open.bind(this)(i + 1, j);
    open.bind(this)(i + 1, j + 1);
  } else if(j === this.props.W - 1) {
    open.bind(this)(i - 1, j);
    open.bind(this)(i - 1, j - 1);
    open.bind(this)(i, j - 1);
    open.bind(this)(i + 1, j);
    open.bind(this)(i + 1, j - 1);
  }
}
