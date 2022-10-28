import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { links } from './utils/constants';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      page: links[0]
    }
  }

  change = page => {
    this.setState({ page })
  }
  render() {
    return (
      <div className="container-fluid">
        <Header change={this.change} />
        <Main page={this.state.page} />
        <Footer />
      </div>
    );
  }
}

export default App;
