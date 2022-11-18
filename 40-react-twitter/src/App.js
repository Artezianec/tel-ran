import React, { Component } from 'react'
import './App.css'
import Body from './components/Body'
import Nav from './components/Nav'
import { TwitterContext } from './utils/context'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {
        avatar: "https://www.gravatar.com/avatar/0?d=monsterid",
        name: "Monster"
      },
      stats: {
        followers: 1000,
        following: 100
      }
    }
  }

  changeAvatar = url => {
    const user = {...this.state.user}
    user.avatar = url?? this.state.user.avatar;
    this.setState({user})
  }
  render() {
    return (
      <div className='app'>
        <TwitterContext.Provider value={
          {
            user: this.state.user,
            stats: this.state.stats,
            changeAvatar: this.changeAvatar
          }
        }>
          <Nav/>
          <Body/>
        </TwitterContext.Provider>
      </div>
    )
  }
}
