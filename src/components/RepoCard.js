import React, { Component } from "react";
import { GITHUB_USERNAME } from "../Constants";
import defaultPreview from "./default_preview.gif";
import "./RepoCard.css";

class RepoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const repo = this.props.repo;
    if (repo.fork) {
      return null;
    }
    let backgroundImageStyle;
    // Only try to retrieve preview images if specified in topic
    if (repo.topics.includes("preview")) {
      backgroundImageStyle = {
        backgroundImage: `url(https://raw.githubusercontent.com/${GITHUB_USERNAME}/${this.props.repo.name}/master/preview.gif)`,
      };
    } else {
      backgroundImageStyle = {
        backgroundImage: `url(${defaultPreview})`,
      };
    }
    return (
      <table className="RepoCard" key={repo.id} style={backgroundImageStyle}>
        <tr>
          <th colSpan="3" className="RepoCardTitle">
            <a href={repo.homepage ? repo.homepage : repo.svn_url}>{repo.name}</a>
          </th>
        </tr>
        <tr>
          <td className="RepoCardInfo">
            <p>{repo.description}</p>
          </td>
          <td />
        </tr>
        <tr>
          <td className="RepoUrls">
            <a className="RepoLink" href={repo.svn_url}>
              <GithubIcon />
            </a>
          </td>
          <td className="RepoTopics">
            {repo.topics.map(
              topic =>
                topic !== "preview" && (
                  <div>
                    <a className="RepoLink" href={`https://github.com/topics/${topic}`}>
                      {topic}
                    </a>
                  </div>
                ),
            )}
          </td>
        </tr>
      </table>
    );
  }
}

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="GithubIcon"
    height="20"
    alt="GitHub"
    viewBox="0 0 16 16"
    version="1.1"
    width="20"
    aria-hidden="true"
  >
    <path
      fill-rule="evenodd"
      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
    />
  </svg>
);

export default RepoCard;
