import React from 'react'
import { Pressable } from 'react-native'
import PropTypes from 'prop-types'
import styled from '@emotion/native'
import { useTheme } from '@emotion/react'

const Container = styled.View`
  flex: 1,
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
`

const Button = ({
  onPress,
  color,
  activeColor,
  children,
  style,
  round,
  ...rest
}) => {
  const theme = useTheme()

  color = !color ? theme.colors.primary : color
  activeColor = !activeColor ? theme.colors.secondary : activeColor

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? activeColor : color,
          borderRadius: round ? 10 : 0,
        },
        style,
      ]}
      {...rest}>
      <Container>{children}</Container>
    </Pressable>
  )
}

Button.defaultProps = {
  style: {},
  color: null,
  activeColor: null,
  round: false,
}

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string,
  activeColor: PropTypes.string,
  children: PropTypes.element.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  round: PropTypes.bool,
}

export default Button
