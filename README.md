React is a library, unlike angularJS which is a framework.

every React application has atleast 1 or more component clubbed together into one page UI application.

react basic syntax of a component:

'''
class Tweet {
	state = {};
	render() {
	
	}
}
'''

1) create a javascript class
2) state will have data we want to display when the component is rendered.
3) render() method describes what the UI should look like. The output of render() will be a react element (virtual DOM) which is a simple plain javascript object that maps to a DOM element.
So unlike vanilla javascript or jQuery we dont have to directly manipulate DOM elements by attaching event handlers directly to DOM elements. In react, we'll only manipulate virtual DOM elements (react elements). Thats why By name - react means it 'reacts' to state change and update the state change to DOM elements.


Get started:
- install latest stable version of nodeJS.
- install the react app package by command - "npm i create-react-app" (source - https://github.com/facebook/create-react-app)
npm is package manager for javacript environment (nodeJS).
i for install

- verify the package by command - "npm -g ls"
- install latest stable version of visual studio.
- click on 'extensions' on right hand side of visual studio startup menu.
- search for 'simple react snippets' install it. (to autocomplete code recommendations).
- search for another 'prettier - code formatter' install it. For this go to settings, enable 'format on save' to automatically save while you edit.
- create a react app by putting CLI command - "npm init react-app arnav-react-app"
Following it will install:
1) a lightweight development server.
2) webpacks - to bundle the file.
3) Babel - to compile javascript code. mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript that can be run by older JavaScript engines.
(visit https://babeljs.io/repl to test react JSX code online).
- After successful creation, it'll say 'Happy Hacking!'.
- cd arnav-react-app/
- start the server b - "npm start", it'll open the browser with localhost:3000 which means the dev server is running.




















# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)





