import React from 'react'
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native'
import { useReduxDevToolsExtension } from '@react-navigation/devtools'
import RegistrationStack from './Registration'

const Navigation = () => {
  const navigationRef = useNavigationContainerRef()

  useReduxDevToolsExtension(navigationRef)

  return (
    <NavigationContainer ref={navigationRef}>
      <RegistrationStack />
    </NavigationContainer>
  )
}

export default Navigation
