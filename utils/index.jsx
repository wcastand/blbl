import React from 'react'
import styled from 'styled-components'

export const Label = ({ children, ...props }) => <label {...props}>{children}</label>

export const Hello = styled.div`
  color: yellow;
`
