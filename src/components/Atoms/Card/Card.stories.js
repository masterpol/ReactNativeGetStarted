import React from 'react'
import { storiesOf } from '@storybook/react-native'
import styled from '@emotion/native'
import Theme from '_themes'
import Card from './Card'

const Container = styled.View`
  flex: 1;
  padding: 10px;
`
const Text = styled.Text``

storiesOf('Card', module).add('default', () => (
  <Theme>
    <Container>
      <Card>
        <Text>Some pretty Card</Text>
      </Card>
    </Container>
  </Theme>
))
