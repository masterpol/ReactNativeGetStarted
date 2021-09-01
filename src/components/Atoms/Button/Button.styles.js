import React from 'react'
import styled from '@emotion/native'
import Button from './Button'
import { useTheme } from '@emotion/react'

const ButtonRed = ({ children, ...props }) => {
  const theme = useTheme()
  const Component = styled(Button)`
    border-radius: ${({ round }) => (round ? 10 : 0)};
  `

  return (
    <Component
      color={theme.colors.red}
      activeColor={theme.colors.pailRed}
      {...props}>
      {children}
    </Component>
  )
}

const ButtonOrange = ({ children, ...props }) => {
  const theme = useTheme()
  const Component = styled(Button)`
    border-radius: ${({ round }) => (round ? 10 : 0)};
  `

  return (
    <Component
      color={theme.colors.orange}
      activeColor={theme.colors.pailOrange}
      {...props}>
      {children}
    </Component>
  )
}

export { ButtonRed, ButtonOrange }
