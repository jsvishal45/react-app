import React, { Component } from 'react';
import HeaderMain from './common/Header';
import Footer from './common/Footer';
import Home from './home/Home';


class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderMain/>
        <Home/>
        <Footer />
      </div>
    );
  }
}

export default App;
