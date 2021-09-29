import React from 'react'
import Theme from '_themes'
import Card from './Card'

describe('Card', () => {
  let props

  beforeEach(() => {
    props = {}
  })

  describe('structure', () => {
    it('should match the snapshot for Card', () => {
      const wrapper = render(
        <Theme>
          <Card testID="card-test" {...props} />
        </Theme>,
      )
      expect(wrapper).toMatchSnapshot()
    })
  })
})
