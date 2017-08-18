import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

import GameField from './GameField';

class Game extends Component {
  onButtonClick() {
    this.props.changePage('start');
    this.props.gameOver(false);
    this.props.victory(false);
  }
  render() {
    function renderGameover() {
      if(this.props.end) {
        return (
          <div>
            <h3>Game Over</h3>
            <button onClick={this.onButtonClick.bind(this)}>Start new Game</button>
          </div>
        )
      }
    }
    function renderVictory() {
      if(this.props.victoryStatus) {
        console.log(this.props.victoryStatus);
        return (
          <div>
            <h3>You Won!</h3>
            <button onClick={this.onButtonClick.bind(this)}>Start new Game</button>
          </div>
        )
      }
    }
    return (
      <div>
        <h1>Game Page</h1>
        {this.props.game.map((arr, i) => {
          return (
            <div key={i}>{arr.map((item, j) => <GameField key={j} i={i} j={j}/>)}</div>
          )
        })}
        <div>{renderGameover.bind(this)()}</div>
        <div>{renderVictory.bind(this)()}</div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    game: state.game,
    end: state.end,
    victoryStatus: state.victoryStatus,
    count: state.victoryCount
  }
}

export default connect(mapStateToProps, actions)(Game)
