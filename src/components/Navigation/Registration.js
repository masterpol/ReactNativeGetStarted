import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
  Login as LoginScreen,
  Signin as SigninScreen,
  Onbording as OnbordingScreen,
} from '_components/Screens'
import { ROUTES } from '_constants'

const { Navigator, Screen } = createStackNavigator()

const RegistrationStack = () => {
  return (
    <Navigator initialRouteName={ROUTES.REGISTRATION.LOGIN}>
      <Screen
        name={ROUTES.REGISTRATION.ONBOARDING}
        component={OnbordingScreen}
      />
      <Screen name={ROUTES.REGISTRATION.LOGIN} component={LoginScreen} />
      <Screen name={ROUTES.REGISTRATION.SIGNIN} component={SigninScreen} />
    </Navigator>
  )
}

export default RegistrationStack
