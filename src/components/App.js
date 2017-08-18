import React, { Component } from 'react';
import { connect } from 'react-redux';

import StartPage from './StartPage'
import Game from './Game'

class App extends Component {
  render() {
    if(this.props.page === 'start') {
      return (
        <StartPage />
      )
    } else if(this.props.page === 'game') {
      return (
        <Game />
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    page: state.page,
  }
}

export default connect(mapStateToProps)(App)
