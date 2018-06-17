import React, { Component } from 'react'
import styled from 'styled-components'

const EASE = 'cubic-bezier(0.4, 0.0, 0.2, 1)'

const Button = styled.button`
  position: absolute;
  top: 2em;
  right: 2em;
  appearance: none;
  border: none;
  padding: 0;
  margin: 0;
  background: transparent;
  color: black;
  font-size: 1em;
  cursor: pointer;
  outline: none;
  z-index: 10;

  svg {
    display: block;
    width: 3em;
    height: 3em;
    transition: transform .3s ${EASE};
    transform: rotate(${props => props.canClose ? 360 : 0}deg);

    path {
      stroke: currentColor;
      fill: none;
      stroke-width: 8px;
      transition: transform .3s ${EASE};
      transform-origin: 0 0;
    }

    path:first-child {
      transform: ${props => props.canClose ? 'rotate(45deg) translateY(8px)' : 'rotate(0deg) translateY(0)'}
    }

    path:last-child {
      transform: ${props => props.canClose ? 'rotate(-45deg) translateY(-8px)' : 'rotate(0deg) translateY(0)'}
    }
  }
`

export default class CloseButton extends Component {
  render() {
    return (
      <Button {...this.props}>
        <svg viewBox="-24 -24 48 48">
          <path d="M-16-8h32" />
          <path d="M-16,8h32" />
        </svg>
      </Button>
    )
  }
}
