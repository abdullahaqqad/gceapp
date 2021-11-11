import React, { Component } from "react";
import { NavBar } from "./components/nav-bar/nav-bar.component";
import { Main } from "./components/main/main.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      numberOfPosts: 3,
    };
  }
  render() {
    
    return (
      <div className="App">
        <NavBar />
        <input
          type="number"
          placeholder="enter number"
          onChange={(e) => this.setState({ numberOfPosts: e.target.value })}
        />
        <Main numberOfPosts={this.state.numberOfPosts}/>
      </div>
    );
  }
}

export default App;
