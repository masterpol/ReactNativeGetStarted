import React from 'react'
import Input from './Input'
import Theme from '_themes'
import { fireEvent } from '@testing-library/react-native'

describe('Input', () => {
  let props

  beforeEach(() => {
    props = {
      onChangeText: jest.fn(),
      value: '',
      placeholder: 'placeholder',
      testID: 'input-test',
    }
  })

  describe('structure', () => {
    it('should match the snapshot for Input', () => {
      const wrapper = render(
        <Theme>
          <Input {...props} />
        </Theme>,
      )
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('actions', () => {
    it('should call onChange action', () => {
      const { getByTestId } = render(
        <Theme>
          <Input {...props} />
        </Theme>,
      )

      const text = 'new value'

      fireEvent.changeText(getByTestId('input-test'), text)

      expect(props.onChangeText).toBeCalledWith(text)
    })
  })
})
