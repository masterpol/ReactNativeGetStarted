import App from './App'
import ENV from 'react-native-config'

let DefaultApp = App
if (JSON.parse(ENV.STORYBOOK)) {
  DefaultApp = require('../.storybook')
}

module.exports = DefaultApp
