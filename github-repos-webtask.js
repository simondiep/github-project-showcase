const GITHUB_USERNAME = "simondiep";
const GITHUB_PERSONAL_ACCESS_TOKEN = "YOUR_TOKEN";

const REPOS_URL = `https://${GITHUB_USERNAME}:${GITHUB_PERSONAL_ACCESS_TOKEN}@api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`;

/**
 * Middleman to cache Github requests, ultimately to avoid hitting the github API rate limit.
 * Refreshes if last request was more than a minute ago
 */
module.exports = async function(context, cb) {
  try {
    const reposWrapper = await getReposWrapper(context.storage);
    const minutesSinceLastRetrieval =
      (new Date().getTime() - new Date(reposWrapper.lastRetrieved).getTime()) / (1000 * 60);
    if (minutesSinceLastRetrieval < 1) {
      cb(null, reposWrapper);
      return;
    }

    const githubRepos = await getReposFromGithub();
    reposWrapper.repos = githubRepos;
    reposWrapper.lastRetrieved = new Date();
    await setReposWrapper(context.storage, reposWrapper);
    cb(null, reposWrapper);
  } catch (e) {
    cb(e);
  }
};

async function getReposWrapper(storage) {
  return new Promise(resolve => {
    storage.get(function(error, data) {
      if (data && data.repos) {
        resolve(data);
      } else {
        const defaultReposWrapper = {
          repos: [],
          lastRetrieved: new Date(),
        };
        resolve(defaultReposWrapper);
      }
    });
  });
}

async function setReposWrapper(storage, reposWrapper) {
  return new Promise((resolve, reject) => {
    storage.set(reposWrapper, { force: 1 }, function(error) {
      if (error) reject();
      resolve();
    });
  });
}

async function getReposFromGithub() {
  const fetch = require("node-fetch");
  return fetch(REPOS_URL, {
    headers: {
      Accept: "application/vnd.github.mercy-preview+json",
    },
  }).then(response => response.json());
}
