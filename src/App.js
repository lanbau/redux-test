import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './js/components/List'
import Form from "./js/components/Form.js";
import Posts from "./js/components/Posts.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <List />
        <Form />
        <Posts />
      </div>
    );
  }
}

export default App;
