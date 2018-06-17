import React, { Component } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  appearance: none;
  border: 0;
  border-radius: .25em;
  padding: .5em 1em;
  margin: 0;
  background: #121212;
  color: #ffffff;
  font-size: 2em;
  font-family: 'Gotham';
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
`

const Container = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default class SignInScreen extends Component {
  render() {
    return (
      <Container>
        <Button onClick={this.props.onSignInClicked}>Sign in</Button>
      </Container>
    )
  }
}
