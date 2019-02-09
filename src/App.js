import React, { Component } from "react";
import "./App.css";
import { FaTwitter, FaGithub } from "react-icons/fa";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>KRISTOFFER PETERSEN</p>
          <div className="sub-line">
            <span className="add">humble </span>web developer
            <span className="strike"> extraordinaire</span>
          </div>
          <div className="icon-row">
            <div className="icon">
              <a href={"https://github.com/krizzmp"}>
                <FaGithub>github</FaGithub>
              </a>
            </div>
            <div className="icon">
              <a href={"https://twitter.com/krizzmp"}>
                <FaTwitter>twitter</FaTwitter>
              </a>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
