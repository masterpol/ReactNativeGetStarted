import React from 'react'
import Signin from './Signin'

describe('Signin Screen', () => {
  let props

  beforeEach(() => {
    props = {}
  })

  describe('structure', () => {
    it('should match the snapshot', () => {
      const wrapper = render(<Signin {...props} />)
      expect(wrapper).toMatchSnapshot()
    })
  })
})
