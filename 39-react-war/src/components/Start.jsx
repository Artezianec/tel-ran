import React from 'react'
import { game } from '../App'

class Start extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: ''
      }
    }

    handleClickStart = () => {
        this.props.changePage(game);
        this.props.changeName(this.state.name);
    }

    componentWillUnmount(){
        console.log("Start unmounted");
    }

    render(){
        return (
            <>
                <h1>Ready For War</h1>
                <input 
                    onChange={e => this.setState({name: e.target.value.toUpperCase()})}
                    type='text' 
                    placeholder='Enter your name' 
                    value={this.state.name}/>
                <button onClick={this.handleClickStart}>Start</button>
            </>
        )
    }
    
}

export default Start