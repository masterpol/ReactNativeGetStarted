# ReactNativeGetStarted :iphone:
A simple template project to start a ReactNative Application

## Commands
Install Dependencies
> yarn

For IOS only, pod installation
> yarn pods

Run Application on either Platform `android`, `ios`: 
> yarn ${platform}

Run for test:
> yarn test

Run for get the report of coverage
> yarn coverage

Run for lint:
> yarn lint

Run Storybook on either Platform `android`, `ios`:
> yarn storybook:${platform}

## Usage
1. You can just download and change what you need.
2. ( :white_check_mark: recomended ) Create a new ReactNative app and move `src/`, `test/`, `storybook/` folders and install the respective dependencies ( :warning: check this project `package.json` and `babel.config.js` to avoid unexpected erros :warning:)

## Pos Installation
### Splash screen
on case of want to implement a good and simple bootsplash here it is a good to to do it easy and quick:
- [react-native-bootsplash](https://github.com/zoontek/react-native-bootsplash)

## Contains
### Navigation
- [React-navigation](https://reactnavigation.org/)
### Components
- [Emotion](https://emotion.sh/docs/@emotion/native)
- [Storybook](https://storybook.js.org/tutorials/intro-to-storybook/react-native/en/get-started/)
### Store Management
- [Redux](https://redux.js.org/)
- [React-redux](https://react-redux.js.org/)
- [ReduxSauce](https://www.npmjs.com/package/reduxsauce)
### Testing
- [React Native Testing Library](https://callstack.github.io/react-native-testing-library)
- [@emotion/jest](https://emotion.sh/docs/@emotion/jest)
- [jest-html-reporter](https://www.npmjs.com/package/jest-html-reporter)
- [redux-saga-test-plan](http://redux-saga-test-plan.jeremyfairbank.com)
- [react-native-debugger](https://github.com/jhen0409/react-native-debugger)
### Assets
- [react-native-svg-transformer](https://github.com/kristerkari/react-native-svg-transformer)
### Http Client
- [apisauce](https://github.com/infinitered/apisauce)


### Why Atomic Design
As Js developer I get the need to reuse and share code created by me for that and the capability of scale project I prefer usigin this way of thinking, this project is based on Brad Frost concept of [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) and the pattern [Presentational and Container](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).

## Folder Architecture
This project is base on atomic desing and module division for that is important mantain all parts of the app as detach as posible for that is proposed this separation:

````
src
|_
    components
        |_
            Atoms
            Molecules
            Organisms
            Navigation
            Screens
    constants
    hooks
    services
    store
    themes
    utils
test
    |_
        coverage
        mocks
storybook
````

## Component construction
For maintain the template as clean as possible I desing the next file naming convention:

:file_folder: Component_folder:
* `${componet_name}.js` main element.
* `${componet_name}.styles.js` element desing variations.
* `${componet_name}.stories.js` storybook file to present components as a desing library.
* `${componet_name}.test.js` testing element, this one should be used for every variation.

## Store Management

:construction: explanation on construction :construction:.