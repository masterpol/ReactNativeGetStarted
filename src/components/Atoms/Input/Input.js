import React from 'react'
import styled from '@emotion/native'
import PropTypes from 'prop-types'

const Element = styled.TextInput`
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 5px 20px;
`

const Input = ({ onChangeText, value, placeholder, ...rest }) => (
  <Element
    onChangeText={onChangeText}
    value={value}
    placeholder={placeholder}
    {...rest}
  />
)

Input.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}

export default Input
