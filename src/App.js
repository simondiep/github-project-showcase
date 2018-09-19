import React, { Component } from "react";
import "./App.css";
// TODO Load this externally
import repositories from "./repositories.json";
import RepoCard from "./components/RepoCard";

const GITHUB_USERNAME = "simondiep";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repositories,
    };
  }

  componentDidMount() {
    // Retrieve all repos for user
    // fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
    //   .then(response => response.json())
    //   .then(responseAsJson => {
    //     this.setState({ repositories: responseAsJson });
    //   });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{`${GITHUB_USERNAME}'s Github Showcase`}</h1>
        </header>
        <div className="Repos">
          {this.state.repositories.map(repo => (
            <RepoCard repo={repo} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
