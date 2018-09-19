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
        <th colspan="3" className="RepoCardTitle">
          {repo.name}
        </th>
      </tr>
      <tr>
        <td class="RepoCardInfo">
          <p>{repo.description}</p>
          {repo.homepage && (
            <div>
              <a href={repo.homepage}>Demo</a>
            </div>
          )}
          <a href={repo.svn_url}>Code</a>
        </td>
        <td class="RepoCardImage">
          <img src={logo} className="DefaultRepoCardImage" alt="logo" />
        </td>
      </tr>
    </table>
  );
};

export default RepoCard;
