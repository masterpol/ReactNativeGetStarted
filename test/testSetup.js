import 'react-native'
import expect from 'expect'
import { createSerializer, matchers } from '@emotion/jest'
import { render } from '@testing-library/react-native'

import 'react-native-gesture-handler/jestSetup'

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock')

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {}

  return Reanimated
})

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

jest.mock('global', () => ({
  ...global,
  WebSocket: function WebSocket() {},
}))

expect.extend(matchers)
// expect.addSnapshotSerializer(createSerializer())
const { JSDOM } = require('jsdom')

const jsdom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost',
})
const { window } = jsdom

global.window = window
global.document = window.document
global.render = render
