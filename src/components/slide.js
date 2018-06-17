import React from 'react'
import { CSSTransition } from 'react-transition-group'

const Slide = ({ direction = 'left', children, ...props }) => (
  <CSSTransition {...props} classNames={`slide-${direction}`} timeout={500}>
    {status => React.cloneElement(children, { status })}
  </CSSTransition>
)

export default Slide
