import React, { Component } from "react";
import "./App.css";
import RepoCard from "./components/RepoCard";
import { GITHUB_USERNAME, REPOS_URL } from "./Constants";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repositories: [],
    };
  }

  componentDidMount() {
    // Retrieve all repos for user
    fetch(REPOS_URL)
      .then(response => response.json())
      .then(responseAsJson => {
        this.setState({ repositories: responseAsJson.repos });
      });
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
