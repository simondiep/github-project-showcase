import React from "react";
import "./RepoCard.css";
import logo from "../logo.svg";

const RepoCard = ({ repo }) => {
  if (repo.fork) {
    return null;
  }
  return (
    <table class="RepoCard" key={repo.id}>
      <tr>
        <td class="RepoCardInfo">
          <h2>{repo.name}</h2>
          <p>{repo.description}</p>
          {repo.homepage && (
            <div>
              <a href={repo.homepage}>Demo</a>
            </div>
          )}
          <a href={repo.svn_url}>Code</a>
        </td>
        <td class="RepoCardImage">
          <img src={logo} className="App-logo" alt="logo" />
        </td>
      </tr>
    </table>
  );
};

export default RepoCard;
