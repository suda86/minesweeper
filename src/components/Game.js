import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import './game.css'
import GameField from './GameField';

class Game extends Component {
  onButtonClick() {
    this.props.changePage('start');
    this.props.gameOver(false);
    this.props.victory(false);
  }
  render() {
    function renderStartNewGameButton() {
      if(this.props.end || this.props.victoryStatus) {
        return (
          <div>
            <button onClick={this.onButtonClick.bind(this)}>Start new Game</button>
          </div>
        )
      }
    }

    function renderMessage() {
      if(this.props.end) {
        console.log('sa');
        return 'Game Over'
      } else if(this.props.victoryStatus) {
        return 'You Won!'
      } else {
        return `Mines: ${this.props.mines}`
      }
    }
    return (
      <div>
        <h3>{renderMessage.bind(this)()}</h3>
        <div className="game">
        {this.props.game.map((arr, i) => {
          return (
            <div className="game-row" key={i}>{arr.map((item, j) => <GameField key={j} i={i} j={j}/>)}</div>
          )
        })}
        </div>
        <div className="new-game-button">{renderStartNewGameButton.bind(this)()}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    game: state.game,
    end: state.end,
    victoryStatus: state.victoryStatus,
    count: state.victoryCount,
    mines: state.mines
  }
}

export default connect(mapStateToProps, actions)(Game)
