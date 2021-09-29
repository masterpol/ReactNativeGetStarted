import React from 'react'
import styled from '@emotion/native'

const Container = styled.View`
  flex: 1;
  border-radius: 10px;
  padding: 10px;
  box-shadow: -5px 5px 0 ${({ theme }) => theme.colors.gray};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`

const Card = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>
}

export default Card
