import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  constructor() {
    super();
    this.state = { text: ''};
  }

  update(name) {
    this.setState({
      text: name.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Hi!!! This is my first react app!</h3> 
          <h5>I would like to ask your name.<br />
              What is your name?
          </h5>
          <input 
            type="text"
            onChange={this.update.bind(this)}
          />
          <h5>My name is {this.state.text}</h5>
          
          </header>  
      </div>
    );
  }
}

export default App;
