import React from 'react'
import { Provider } from 'jotai'
import 'react-native-gesture-handler'
import Theme from '_themes'
import Navigation from '_components/Navigation'

const App = () => {
  return (
    <Provider>
      <Theme>
        <Navigation />
      </Theme>
    </Provider>
  )
}

export default App
