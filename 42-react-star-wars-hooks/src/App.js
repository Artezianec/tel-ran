import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { navItems } from './utils/constants';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPage: navItems[0]
    }
  }

  changePage = currentPage => {
    this.setState({ currentPage })
  }

  render() {
    return (
      <div className="container-fluid">
        <Header changePage={this.changePage} />
        <Main currentPage={this.state.currentPage} />
        <Footer />
      </div>
    );
  }

}

export default App;
