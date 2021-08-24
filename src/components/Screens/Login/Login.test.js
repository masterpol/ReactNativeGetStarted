import React from 'react'
import Login from './Login'

describe('Login Screen', () => {
  let props

  beforeEach(() => {
    props = {}
  })

  describe('structure', () => {
    it('should match the snapshot', () => {
      const wrapper = render(<Login {...props} />)
      expect(wrapper).toMatchSnapshot()
    })
  })
})