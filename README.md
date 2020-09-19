### Let's briefly go over the various config files used in this project

- .babelrc: To simplify the require/import of paths in our project, we must configure directory aliases.
- .buckconfig: Used to speed up builds plus more.
- .eslintrc.js: I use eslint as my linter of choice. This is the config used to set up all the various options. Including relevant config to use with Typescript and Prettier.
- prettier.config.js: The config for the Prettier code formatter.
- .watchmanconfig: Is a file watcher used for hot reloading.
- app.json: Used by React Native contains the name of your app.
- babel.config.js: The config used by Babel, which transpile our code into compliant ES5, so we can use all the newest and greatest features from JavaScript.
- metro.config.js: Metro is a React Native javascript bundler.
- package.json: The file use to manage dependencies and build scripts.
- react-native.config.js: As of React Native 0.60 you use this file to allow you to import custom fonts and assets into your React Native project.
- yarn.lock: Not quite config but used by package.json.

## Now onto the more interesting part of this project

- _test_: For testing.
- android: All the specific native code for Android. You will only need to edit this if you need to write Android specific code in Java/Kotlin or edit the way your application is built.
- ios: Same as above except for IOS.
- app: Now most of the code related to this project exists within the app/ folder.

## Structure Project (app/)

- assets: Just as the name implies, this houses static files (e.g images) used in the application.
- component: Shared components used across features are placed in this directory.
- container: You can put you all screen-based components inside here.
- language: It contains the language file used in the app.
- navigation: You project base navigation goes here. You can create stack navigator and export it to your application.
- redux: Inside redux folder you have actions, reducers, store which can easily manage your redux files.
- service: This folder containers logic related to external API communications.
- styles: If you have global styles defined in your project you can put it over here like color, font styles like things.
- utils: You can put utilites files over here.
