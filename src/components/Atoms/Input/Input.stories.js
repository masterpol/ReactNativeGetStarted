import React, { useState } from 'react'
import { storiesOf } from '@storybook/react-native'
import Theme from '_themes'
import styled from '@emotion/native'
import Input from './Input'

const Container = styled.View`
  padding: 0 20px;
`

const InputHandler = () => {
  const [value, setValue] = useState('')

  return (
    <Input
      onChangeText={d => setValue(d)}
      value={value}
      placeholder="General Input"
    />
  )
}

storiesOf('Input', module).add('general', () => (
  <Theme>
    <Container>
      <InputHandler />
    </Container>
  </Theme>
))
