import React from 'react'
import { P, H1, H2, H3, H4, H5, H6 } from '.'
import Theme from '_themes'

describe('General Text', () => {
  let props

  beforeEach(() => {
    props = {
      children: 'test',
    }
  })

  describe('structure', () => {
    it('should match the snapshot for general text', () => {
      const wrapper = render(
        <Theme>
          <P testID="text-test" {...props} />
        </Theme>,
      )
      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot for H1', () => {
      const wrapper = render(
        <Theme>
          <H1 testID="h1-test" {...props} />
        </Theme>,
      )
      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot for H2', () => {
      const wrapper = render(
        <Theme>
          <H2 testID="h2-test" {...props} />
        </Theme>,
      )
      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot for H3', () => {
      const wrapper = render(
        <Theme>
          <H3 testID="h3-test" {...props} />
        </Theme>,
      )
      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot for H4', () => {
      const wrapper = render(
        <Theme>
          <H4 testID="h4-test" {...props} />
        </Theme>,
      )
      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot for H5', () => {
      const wrapper = render(
        <Theme>
          <H5 testID="h5-test" {...props} />
        </Theme>,
      )
      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot for H6', () => {
      const wrapper = render(
        <Theme>
          <H6 testID="h6-test" {...props} />
        </Theme>,
      )
      expect(wrapper).toMatchSnapshot()
    })
  })
})
