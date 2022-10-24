import React from 'react'
import { addr, key } from '../utils/Key'
import Form from './Form'
import Weather from './Weather'

class Data extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            country: 'IL',
            city: 'Rehovot',
            temp: 23,
            pressure: 1000,
            sunset: '18:05'
        }
    }

    getWeather = city => {
        fetch(`${addr}q=${city}&appid=${key}`)
            .then(responce => responce.json())
            .then(data => this.setState(
                {
                    country: data.sys.country,
                    city: data.name,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: data.sys.sunset
                }
            ))
    }
    render() {
        return (
            <div>
                <Form />
                <Weather info={this.state} />
            </div>
        )
    }
}

export default Data