import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index'
import './gameField.css';

class GameField extends Component {
  constructor (props) {
    super(props);
    this.state = {
      fieldStatus: 'closed'
    }
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.count === 0) {
      this.props.victory(true)
    }
  }
  onRightClick(e) {
    e.preventDefault()
    if(this.state.fieldStatus === 'blocked' && !this.props.end && !this.props.victoryStatus) {
      this.setState({
        fieldStatus: 'closed'
      })
    } else if(!this.props.end && !this.props.victoryStatus){
      this.setState({
        fieldStatus: 'blocked'
      })
    }
  }
  onClick() {
    if(this.props.game[this.props.i][this.props.j] !== 'M' && !this.props.end) {
      this.setState({
        fieldStatus: 'opened'
      })
      this.props.countDown();
    } else if(this.props.game[this.props.i][this.props.j] === 'M' && !this.props.end && !this.props.victoryStatus){
      this.setState({
        fieldStatus: 'mine'
      })
      this.props.gameOver(true)

    }
  }
  render() {
    if(this.state.fieldStatus === 'closed') {
      return (
        <div className="game-field-closed" onContextMenu={this.onRightClick.bind(this)} onClick={this.onClick.bind(this)}>.</div>
      )
    } else if(this.state.fieldStatus === 'opened') {
      return (
        <div className="game-field-opened" >{this.props.game[this.props.i][this.props.j]}</div>
      )
    } else if(this.state.fieldStatus === 'blocked') {
        return (
          <div className="game-field-blocked" onContextMenu={this.onRightClick.bind(this)} >M</div>
        )
    } else if(this.state.fieldStatus === 'mine') {
      return (
        <div className="game-field-mine" >.</div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    game: state.game,
    end: state.end,
    count: state.victoryCount,
    victoryStatus: state.victoryStatus
  }
}

export default connect(mapStateToProps, actions)(GameField);
