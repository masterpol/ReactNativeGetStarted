import React from 'react'
import Theme from '_themes'
import Navigation from '_components/Navigation'
import ENV from 'react-native-config'
import { default as storybookApp } from '_storybook'
import 'react-native-gesture-handler'

const App = () => {
  return (
    <Theme>
      <Navigation />
    </Theme>
  )
}

export default JSON.parse(ENV.STORYBOOK) ? storybookApp : App
