import React from 'react'
import styled from 'styled-components'
import { Hello } from './utils/index.jsx'

const Container = styled.div`
  background: blue;
`

export default () => {
  return (
    <Container>
      <Hello>hello</Hello>
    </Container>
  )
}
