import React, { Component } from 'react';
import { getState } from '../helpers/state';
import { connect } from 'react-redux';
import './start-page.css';

import * as actions from '../actions/index';

class StartPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      custom: false
    }
  }
  onFormSubmit(e) {
    e.preventDefault();
    const height = this.refs.height.value;
    const width = this.refs.width.value;
    const mineNum = this.refs.mineNum.value;
    const restToWin = height * width - mineNum;

    if(height < 20 && width < 20 && height > 0 && width > 0 && mineNum < height * width) {
      const state = getState(height, width, mineNum);
      this.refs.height.value = '';
      this.refs.width.value = '';
      this.refs.mineNum.value = '';
      this.props.loadState(state);
      this.props.changePage('game');
      this.props.setupCount(restToWin);
      this.props.setupMines(mineNum)
      this.props.setupH(height);
      this.props.setupW(width);
    } else if(mineNum > height * width) {
      console.log('number of mines must be smaller from numbers of fields');
    } else {
      console.log('error');
    }
  }
  onStart(e) {
    e.preventDefault();
    if(this.refs.level.value === 'begginer') {
      const restToWin = 10 * 10 - 10;
      const state = getState(10, 10, 10);
      this.props.loadState(state);
      this.props.changePage('game');
      this.props.setupCount(restToWin);
      this.props.setupMines(10)
      this.props.setupH(10);
      this.props.setupW(10);
    } else if(this.refs.level.value === 'intermediate') {
      const restToWin = 16 * 16 - 40;
      const state = getState(16, 16, 40);
      this.props.loadState(state);
      this.props.changePage('game');
      this.props.setupCount(restToWin);
      this.props.setupMines(40)
      this.props.setupH(16);
      this.props.setupW(16);
    } else if(this.refs.level.value === 'hard') {
      const restToWin = 16 * 30 - 99;
      const state = getState(16, 30, 99);
      this.props.loadState(state);
      this.props.changePage('game');
      this.props.setupCount(restToWin);
      this.props.setupMines(99)
      this.props.setupH(16);
      this.props.setupW(30);
    } else if(this.refs.level.value === 'custom') {
      this.setState({
        custom: true
      })
    }
  }

  render() {
    function renderCustomForm() {
      if(this.state.custom) {
        return (
          <form onSubmit={this.onFormSubmit.bind(this)}>
            <label>Enter number of rows: </label>
            <input ref="height" type="number" placeholder="maximum is 20" />
            <br />
            <label>Enter number of columns: </label>
            <input ref="width" type="number" placeholder="maximum is 20" />
            <br />
            <label>Enter number of mines</label>
            <input ref="mineNum" type="number"/>
            <br />
            <button type="submit">Start Game</button>
          </form>
        )
      } else {
        return <div></div>
      }
    }
    return (
      <div>
        <h1 className="title">Welcome</h1>
        <h3 className="title">Choose your game and start plaing</h3>
        <form className="level-form" onSubmit={this.onStart.bind(this)}>
          <select ref="level">
            <option value="begginer">begginer</option>
            <option value="intermediate">intermediate</option>
            <option value="hard">hard</option>
            <option value="custom">custom</option>
          </select>
          <br />
          <button type="submit">Start Game</button>
        </form>
        {renderCustomForm.bind(this)()}
      </div>
    )
  }
}

export default connect(null, actions)(StartPage);
