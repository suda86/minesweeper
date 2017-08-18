import React, { Component } from 'react';
import { getState } from '../helpers/state';
import { connect } from 'react-redux';

import * as actions from '../actions/index';

class StartPage extends Component {
  onFormSubmit(e) {
    e.preventDefault();
    const height = this.refs.height.value;
    const width = this.refs.width.value;
    const mineNum = this.refs.mineNum.value;
    const restToWin = height * width - mineNum;

    if((height < 20 || width < 20) && mineNum < height * width) {
      const state = getState(height, width, mineNum);
      this.refs.height.value = '';
      this.refs.width.value = '';
      this.refs.mineNum.value = '';
      console.log(state);
      this.props.loadState(state);
      this.props.changePage('game');
      this.props.setupCount(restToWin);
    } else if(mineNum > height * width) {
      console.log('number of mines must be smaller from numbers of fields');
    } else {
      console.log('error');
    }
  }
  render() {
    return (
      <div>
        <h2>Enter table dimensions and number of mines</h2>
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <label>Enter table hight: </label>
          <input ref="height" type="number" placeholder="maximum is 20" />
          <br />
          <label>Enter table width: </label>
          <input ref="width" type="number" placeholder="maximum is 20" />
          <br />
          <label>Enter number:  of mines</label>
          <input ref="mineNum" type="number"/>
          <br />
          <button type="submit">start game</button>
        </form>
      </div>
    )
  }
}

export default connect(null, actions)(StartPage);
