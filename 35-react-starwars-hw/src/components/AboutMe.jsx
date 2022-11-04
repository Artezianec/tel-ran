import React from 'react'
import { url } from '../utils/constants'

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: []
    }
  }
  componentDidMount() {

    fetch(`${url}/v1/peoples/1`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          info: {
            name: data.name,
            birth_year: data.birth_year,
            eye_color: data.eye_color,
            height: data.height
          }
        })
      })
  }
  render() {
    return (
      <div><ul>
        <li>Name: {this.state.info.name}</li>
        <li>birth_year: {this.state.info.birth_year}</li>
        <li>eye_color: {this.state.info.eye_color}</li>
        <li>height: {this.state.info.height}</li>
        </ul></div>
    )
  }
}

export default AboutMe