import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index'
import './gameField.css';
import open from '../helpers/open';
import countMines from '../helpers/countMines';
import openAround from '../helpers/openAround';

class GameField extends Component {

  componentWillReceiveProps(nextProps) {
    if(nextProps.count === 0) {
      this.props.victory(true)
    }
  }
  onRightClick(e) {
    e.preventDefault()
    if(this.props.game[this.props.i][this.props.j].status === 'blocked' && !this.props.end && !this.props.victoryStatus) {
      this.props.deblock(this.props.i, this.props.j);
      this.props.addMine()
    } else if(!this.props.end && !this.props.victoryStatus) {
      this.props.block(this.props.i, this.props.j);
      this.props.removeMine()
    }
  }
  onClick() {
    open.call(this, this.props.i, this.props.j);
  }

  onDubClick() {
    let minesNumber = countMines.call(this, this.props.i, this.props.j);
    if(this.props.game[this.props.i][this.props.j].value === minesNumber) {
      openAround.call(this, this.props.i, this.props.j);
    }
  }
  render() {
    if(this.props.game[this.props.i][this.props.j].status === 'closed') {
      return (
        <div className="game-field-closed" onContextMenu={this.onRightClick.bind(this)} onClick={this.onClick.bind(this)}></div>
      )
    } else if(this.props.game[this.props.i][this.props.j].status === 'opened' && this.props.game[this.props.i][this.props.j].value === 0) {
      return (
        <div className="game-field-opened" ></div>
      )
    } else if(this.props.game[this.props.i][this.props.j].status === 'opened') {
      return (
        <div className="game-field-opened" onDoubleClick={this.onDubClick.bind(this)} ><p className={`value${this.props.game[this.props.i][this.props.j].value}`}>{this.props.game[this.props.i][this.props.j].value}</p></div>
      )
    }  else if(this.props.game[this.props.i][this.props.j].status === 'blocked') {
        return (
          <div className="game-field-blocked" onContextMenu={this.onRightClick.bind(this)} ></div>
        )
    } else if(this.props.game[this.props.i][this.props.j].status === 'mine') {
      return (
        <div className="game-field-mine" ></div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    game: state.game,
    end: state.end,
    count: state.victoryCount,
    victoryStatus: state.victoryStatus,
    H: state.H,
    W: state.W
  }
}

export default connect(mapStateToProps, actions)(GameField);
