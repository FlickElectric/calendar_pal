import React, { Component } from 'react'
import styled from 'styled-components'

const EventContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  line-height: 1.5;
  transition: background-color 0.5s ease;
`

const EventTitle = styled.div`
  text-transform: uppercase;
`

const EventName = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 2em;
  line-height: 1.25em;
  text-transform: uppercase;
`

const EventTimes = styled.div`
  font-size: 1.5em;
`

export default class Event extends Component {
  render() {
    const { className, event, free, title, current } = this.props
    return (
      <EventContainer empty={!event} current={current} className={className}>
        <EventTitle current={current}>{title}</EventTitle>
        <EventName>
          {event ? event.summary : free}
        </EventName>
        <EventTimes>
          {event && event.start.format('h:mm–') + event.end.format('h:mm')}
        </EventTimes>
      </EventContainer>
    )
  }
}
