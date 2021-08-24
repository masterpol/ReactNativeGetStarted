# ReactNativeGetStarted
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


## Contains
### Navigation
- [React-navigation](https://reactnavigation.org/)
### Components
- [Emotion](https://emotion.sh/docs/@emotion/native)
### Testing
- [React Native Testing Library](https://callstack.github.io/react-native-testing-library)
- [@emotion/jest](https://emotion.sh/docs/@emotion/jest)
- [jest-html-reporter](https://www.npmjs.com/package/jest-html-reporter)
### Assets
- [react-native-svg-transformer](https://github.com/kristerkari/react-native-svg-transformer)

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
    services
    store
    themes
    utils
test
    |_
        coverage
        mocks
````
explanation on construction.
