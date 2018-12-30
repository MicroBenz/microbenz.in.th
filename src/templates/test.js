import React from 'react'
import styled from 'styled-components'

const Test = styled.p`
  color: red;
`
const TestCustomComponent = props => {
  return <Test>TestCustomComponent</Test>
}

export default TestCustomComponent
