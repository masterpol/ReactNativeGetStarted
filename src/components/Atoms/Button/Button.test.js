import React from 'react'
import { View } from 'react-native'
import { Button, ButtonOrange, ButtonRed } from './'
import Theme from '_themes'

describe('Login Screen', () => {
  let props

  beforeEach(() => {
    props = {
      onPress: jest.fn(),
      children: <View />,
    }
  })

  describe('structure', () => {
    it('should match the snapshot for Button', () => {
      const wrapper = render(
        <Theme>
          <Button name="button-test" {...props} />
        </Theme>,
      )
      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot for ButtonOrange', () => {
      const wrapper = render(
        <Theme>
          <ButtonOrange name="buttonOrange-test" {...props} />
        </Theme>,
      )
      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot for ButtonRed', () => {
      const wrapper = render(
        <Theme>
          <ButtonRed name="buttonRed-test" {...props} />
        </Theme>,
      )
      expect(wrapper).toMatchSnapshot()
    })
  })
})
