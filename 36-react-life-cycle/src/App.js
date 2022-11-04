import React from 'react';
import './App.css';
const base_url = 'https://sw-info-api.herokuapp.com';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      character: {}
    }
  }

  componentDidMount(){
    fetch(`${base_url}/v1/peoples/18`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          character: {
            name: data.name,
            birth_year: data.birth_year,
            img_url: `${base_url}/${data.image}`
          },
          isLoading: false
        })
      })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="App spinner-border text-primary">
        </div>
      );
    } else {
      return (
        <div className="App">
          <h1>Name: {this.state.character.name}</h1>
          <h2>Birth year: {this.state.character.birth_year}</h2>
          <img src={this.state.character.img_url} alt={this.state.character.name}/>
        </div>
      );
    }

  }

}

export default App;
