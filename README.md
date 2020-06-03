## Description

This APP was created using CRA V3 and uses [Ant design](http://ant.design) along with it.
Ant design needs a custom version [react-app-rewired](https://github.com/timarney/react-app-rewired/) to run on top of react-scripts.

Typescript was added after project was initialized and not as part of CRA

Cypress runs just fine.
Config added to run code coverage for cypress.

Resolved related issue
Cypress: [#35](https://github.com/bahmutov/cra-ts-code-coverage-example/issues/35)

React app rewired: [#461](https://github.com/timarney/react-app-rewired/issues/461)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:7000](http://localhost:7000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run dev`

Launches the app as well as kick start cypress in the backgroud. It will also run the coverage reports which can be found in the cypress/coverage directory

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
