import React from 'react'
import { Alert } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import styled from '@emotion/native'

import Theme from '_themes'
import { Button, ButtonRed, ButtonOrange } from './'

const Text = styled.Text`
  color: ${({ theme }) => theme.colors.white};
`

storiesOf('Button', module)
  .add('Primary', () => (
    <Theme>
      <Button onPress={() => Alert.alert('Button Pressed')}>
        <Text>Default text</Text>
      </Button>
    </Theme>
  ))
  .add('Red', () => (
    <Theme>
      <ButtonRed onPress={() => Alert.alert('Button Pressed')}>
        <Text>Default text</Text>
      </ButtonRed>
    </Theme>
  ))
  .add('Red Round', () => (
    <Theme>
      <ButtonRed onPress={() => Alert.alert('Button Pressed')} round={true}>
        <Text>Default text</Text>
      </ButtonRed>
    </Theme>
  ))
  .add('Orange', () => (
    <Theme>
      <ButtonOrange onPress={() => Alert.alert('Button Pressed')}>
        <Text>Default text</Text>
      </ButtonOrange>
    </Theme>
  ))
  .add('Orange Roun', () => (
    <Theme>
      <ButtonOrange onPress={() => Alert.alert('Button Pressed')} round={true}>
        <Text>Default text</Text>
      </ButtonOrange>
    </Theme>
  ))
