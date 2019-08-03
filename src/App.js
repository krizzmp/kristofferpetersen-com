import React, { Component } from "react";
import "./App.css";
import { FaTwitter, FaGithub } from "react-icons/fa";

function PortfolioLink({ title, description, url }) {
  return (
    <a href={url} style={{alignSelf: "stretch"}}>
      <div className="portfolio-feature">
        <div className="img" />
        <div className="desc">
          <h3>{title}</h3>
          <p>{description}</p>
          <button>go</button>
        </div>
      </div>
    </a>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>KRISTOFFER PETERSEN</h1>
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
          <h2>My Work</h2>
          <PortfolioLink
            title="hatch"
            description="an app for collaboratively creating simple diagrams"
            url="https://hatch.now.sh"
          />
        </header>
      </div>
    );
  }
}

export default App;
