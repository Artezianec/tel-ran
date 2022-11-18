import React, { Component } from 'react'
import { page_game } from '../const/const'

export default class Result extends Component {
  render() {
    return (
      <div className='App'>
        <h1>{this.props.result}</h1>
        <h2>Comp: {this.props.compPoint} - Player: {this.props.playerPoint}</h2>
        <button onClick={(e) => { this.props.switchPage(page_game) }}>Again?</button>
      </div>
    )
  }
}
