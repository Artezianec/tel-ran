import React, { Component } from 'react'
import { page_game } from '../const/const'

export default class Start extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }
  handleClickStart = () => {
    this.props.switchPage(page_game);
    this.props.changeName(this.state.name)

  }
  render() {
    return (
      <div className='App'>
        <h1>Ready for war</h1>
        <input onChange={(e) => { this.setState({ name: e.target.value.toUpperCase() }) }} type="text" placeholder='Enter your name' value={this.state.name} />
        <button onClick={(e) => { this.handleClickStart() }}>Start</button>
      </div>
    )
  }
}
