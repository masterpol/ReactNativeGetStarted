import React from 'react'
import Onbording from './Onbording'

describe('Onbording Screen', () => {
  let props

  beforeEach(() => {
    props = {}
  })

  describe('structure', () => {
    it('should match the snapshot', () => {
      const wrapper = render(<Onbording {...props} />)
      expect(wrapper).toMatchSnapshot()
    })
  })
})