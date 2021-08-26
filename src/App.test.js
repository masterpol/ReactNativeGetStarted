/**
 * @format
 */
import React from 'react'
import App from './App'

jest.mock('react-native-config', () => ({
  STORYBOOK: 'false',
}))

describe('App', () => {
  it('renders correctly', async () => {
    const wrapper = render(<App />)
    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
