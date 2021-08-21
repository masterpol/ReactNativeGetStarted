/**
 * @format
 */
import React from 'react'
import App from './App'

describe('App', () => {
  it('renders correctly', async () => {
    const wrapper = render(<App />)
    expect(wrapper.toJSON()).toMatchSnapshot();
  })
})
