import * as actions from '../index.js'
import {
    CHANGE_PAGE,
    LOAD_STATE,
    GAME_OVER,
    SETUP_COUNTER,
    COUNT_DOWN,
    VICTORY,
    BLOCK_FIELD,
    DEBLOCK_FIELD,
    OPEN_FIELD,
    BOOM_FIELD,
    SETUP_H,
    SETUP_W,
    SETUP_MINES,
    PLUS_MINES,
    MINUS_MINES
  } from '../../constants'

it('test action creator changePage', () => {
    let test = actions.changePage('somePage')

    expect(test).toEqual({
        type: CHANGE_PAGE,
        page: 'somePage'
      })
})

it('test action creator loadState', () => {
    let test = actions.loadState({})

    expect(test).toEqual({
        type: LOAD_STATE,
        payload: {}
      })
})

it('test action creator setupH', () => {
    let test = actions.setupH(5)

    expect(test).toEqual({
        type: SETUP_H,
        h: 5
      })
})

it('test action creator setupW', () => {
    let test = actions.setupW(5)

    expect(test).toEqual({
        type: SETUP_W,
        w: 5
      })
})

it('test action creator gameOver', () => {
    let test = actions.gameOver(true)

    expect(test).toEqual({
        type: GAME_OVER,
        payload: true
      })
})

it('test action creator setupCounter', () => {
    let test = actions.setupCount(5)

    expect(test).toEqual({
        type: SETUP_COUNTER,
        num: 5
      })
})

it('test action creator countDown', () => {
    let test = actions.countDown()

    expect(test).toEqual({
        type: COUNT_DOWN
      })
})

it('test action creator victoryStatus', () => {
    let test = actions.victory(true)

    expect(test).toEqual({
        type: VICTORY,
        payload: true
      })
})

it('test action creator setupMines', () => {
    let test = actions.setupMines(5)

    expect(test).toEqual({
        type: SETUP_MINES,
        num: 5
      })
})

it('test action creator addMine', () => {
    let test = actions.addMine()

    expect(test).toEqual({
        type: PLUS_MINES
      })
})

it('test action creator removeMine', () => {
    let test = actions.removeMine()

    expect(test).toEqual({
        type: MINUS_MINES
      })
})

it('test action creator block', () => {
    let test = actions.block(5, 5)

    expect(test).toEqual({
        type: BLOCK_FIELD,
        i: 5,
        j: 5
      })
})

it('test action creator boom', () => {
    let test = actions.boom(5, 5)

    expect(test).toEqual({
        type: BOOM_FIELD,
        i: 5,
        j: 5
      })
})

it('test action creator open', () => {
    let test = actions.open(5, 5)

    expect(test).toEqual({
        type: OPEN_FIELD,
        i: 5,
        j: 5
      })
})

it('test action creator deblock', () => {
    let test = actions.deblock(5, 5)

    expect(test).toEqual({
        type: DEBLOCK_FIELD,
        i: 5,
        j: 5
      })
})