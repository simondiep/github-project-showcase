# github-project-showcase

Easily showcase your github projects.

## How to set up

- Fork this project
- Create a Github personal access token for this app
  - https://github.com/settings/tokens
  - select the scope `public_repo`
- Create a new [webtask](https://webtask.io/make) using the template `github-repos-webtask.js`
- Update `constants.js` with your own values
- `npm i && npm start`

## To deploy to Github pages

`npm run deploy`

This leverages the npm module `gh-pages` to deploy to your repo, but under the gh-pages branch.

## How to display preview images

For each of your repositories:

- add an image called `preview.gif` at the top-most level
- add a Github Topic called `preview`
