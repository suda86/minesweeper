import React, { Component } from 'react';
import { getState } from '../helpers/state';
import { connect } from 'react-redux';
import './start-page.css';

import * as actions from '../actions/index';

class StartPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      custom: false,
      error: '',
      customForm: false,
      levelMenu: true
    }
  }
  onFormSubmit(e) {
    e.preventDefault();
    const height = this.refs.height.value;
    const width = this.refs.width.value;
    const mineNum = this.refs.mineNum.value;
    if(mineNum < height * width) {
      this.start(width, height, mineNum)
      this.setState({
        error: ''
      });
    } else {
      this.setState({
        error: `ERROR: Number of mines must be smaller then numbers of fields. Your field number is ${height * width} and number of mines is ${mineNum}`
      });
    }
  }
  start(w, h, mines) {
      const restToWin = w * h - mines;
      const state = getState(h, w, mines);
      this.props.loadState(state);
      this.props.changePage('game');
      this.props.setupCount(restToWin);
      this.props.setupMines(mines)
      this.props.setupH(h);
      this.props.setupW(w);
  }

  renderError() {
    if(this.state.error) {
      return (
        <div className="error">{this.state.error}</div>
      )
    }
  }

  showCustomForm() {
    this.setState({
      customForm: true,
      levelMenu: false
    })
  }

  render() {
    return (
      <div>
        <h1 className="title">Welcome</h1>
        <h3 className="title">Choose your game and start plaing</h3>
        {this.state.levelMenu && <div className="level-div">
          <button onClick={this.start.bind(this,10,10,10)} className="level">Begginer</button>
          <button onClick={this.start.bind(this,16,16,40)} className="level">Intermedium</button>
          <button onClick={this.start.bind(this,30,16,99)} className="level">Hard</button>
          <button onClick={this.showCustomForm.bind(this)} className="level">Custom</button>
        </div>}
        {this.state.customForm && <form onSubmit={this.onFormSubmit.bind(this)}>
          <label>Enter number of rows: </label>
          <input ref="height" type="number" min="1" max="16" required placeholder="maximum is 16" />
          <br />
          <label>Enter number of columns: </label>
          <input ref="width" type="number" min="1" max="30" required placeholder="maximum is 30" />
          <br />
          <label>Enter number of mines</label>
          <input ref="mineNum" type="number" min="1" required />
          <br />
          <button type="submit">Start Game</button>
          {this.renderError()}
        </form>}
      </div>
    )
  }
}

export default connect(null, actions)(StartPage);
