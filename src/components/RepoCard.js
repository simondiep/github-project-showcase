import React, { Component } from "react";
import "./RepoCard.css";
import defaultPreview from "./default_preview.gif";

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
        backgroundImage: `url(https://raw.githubusercontent.com/simondiep/${this.props.repo.name}/master/preview.gif)`,
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
            {repo.name}
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
            {repo.homepage && (
              <div>
                <a className="RepoLink" href={repo.homepage}>
                  Demo
                </a>
              </div>
            )}
            <a className="RepoLink" href={repo.svn_url}>
              Code
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

export default RepoCard;
