import React from 'react'
import { storiesOf } from '@storybook/react-native'

import Theme from '_themes'
import { P, H1, H2, H3, H4, H5, H6 } from '.'

storiesOf('Text', module).add('General', () => (
  <Theme>
    <H1>H1</H1>
    <H2>H2</H2>
    <H3>H3</H3>
    <H4>H4</H4>
    <H5>H5</H5>
    <H6>H6</H6>
    <P>P</P>
  </Theme>
))
