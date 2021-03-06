import React from 'react'
import { Provider } from 'react-redux'
import 'react-native-gesture-handler'
import Theme from '_themes'
import Navigation from '_components/Navigation'
import configureStore from '_store/configureStore'

const { store } = configureStore()

const App = () => {
  return (
    <Provider store={store}>
      <Theme>
        <Navigation />
      </Theme>
    </Provider>
  )
}

export default App
