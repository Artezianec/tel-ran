import React, { Component } from 'react'
// rce
export class FormControl extends Component {
    constructor(props) { //rconst
        super(props)

        this.state = {
            city: ''
        }
    }

    handleChangeCity = e => {
        this.setState({ city: e.target.value })
    }
    handleClickGetWeather = () => {
        this.props.getWeather(this.state.city)
        this.setState({ city: '' });
    }
    render() {
        return (
            <div>
                <input onChange={this.handleChangeCity} type='text' value={this.state.city} />
                <button onClick={this.handleClickGetWeather}>Get weather</button>
            </div>
        )
    }
}

export default FormControl