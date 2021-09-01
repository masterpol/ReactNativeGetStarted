import React from 'react'
import { View } from 'react-native'
import { Button, ButtonOrange, ButtonRed } from './'
import Theme from '_themes'
import { fireEvent } from '@testing-library/react-native'

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
          <Button testID="button-test" {...props} />
        </Theme>,
      )
      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot for ButtonOrange', () => {
      const wrapper = render(
        <Theme>
          <ButtonOrange testID="buttonOrange-test" {...props} />
        </Theme>,
      )
      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot for ButtonRed', () => {
      const wrapper = render(
        <Theme>
          <ButtonRed testID="buttonRed-test" {...props} />
        </Theme>,
      )
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('actions', () => {
    it('should call onPress action', () => {
      const { getByTestId } = render(
        <Theme>
          <Button testID="buttonRed-test" {...props} />
        </Theme>,
      )

      fireEvent.press(getByTestId('buttonRed-test'))
      expect(props.onPress).toBeCalled()
    })
  })
})
