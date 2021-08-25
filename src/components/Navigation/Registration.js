import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
  Login as LoginScreen,
  Signin as SigninScreen,
  Onbording as OnbordingScreen,
} from '_components/Screens'

const { Navigator, Screen } = createStackNavigator()

const RegistrationStack = () => {
  return (
    <Navigator initialRouteName="Onbording">
      <Screen name="Onbording" component={OnbordingScreen} />
      <Screen name="Login" component={LoginScreen} />
      <Screen name="Signin" component={SigninScreen} />
    </Navigator>
  )
}

export default RegistrationStack
