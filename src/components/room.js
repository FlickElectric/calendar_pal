/* global gapi */

import React, { Component } from 'react'
import styled from 'styled-components'

import moment from '../lib/moment'
import Event from './event'

const RoomContainer = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #ffe600;
  color: #121212;
`

const LoadingContainer = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  font-size: 4em;
  font-weight: 800;
  text-transform: uppercase;
  min-height: 100vh;
  transform: translateY(${props => props.show ? 0 : '100vh'});
  opacity: ${props => props.show ? 1 : 0};
`

const CurrentEvent = styled(Event)`
  font-size: 2em;
  font-weight: 800;
  flex: 1;

  > * {
    transition: transform .5s ease;
    transform: translateY(${props => props.show ? 0 : '-100vh'});

    &:nth-child(1) { transition-delay: ${props => props.show ? '.7s' : 0}; }
    &:nth-child(2) { transition-delay: ${props => props.show ? '.6s' : 0}; }
    &:nth-child(3) { transition-delay: ${props => props.show ? '.5s' : 0}; }
  }
`

const NextEvent = styled(Event)`
  background: #121212;
  color: #ffffff;
  transition: transform .5s ease;
  transform: translateY(${props => props.show ? 0 : '100%'});
  transition-delay: ${props => props.show ? '.5s' : 0};
`

export default class Room extends Component {
  state = { loading: true, now: moment() }

  componentDidMount() {
    this.refresh()
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  render() {
    const { room: { name }, status } = this.props
    const { loading, current, next, now } = this.state
    const showEvents = !loading && (status.substr(0, 5) === 'enter')

    return (
      <RoomContainer>
        <LoadingContainer show={loading}>Loading {name}…</LoadingContainer>
        <CurrentEvent
          show={showEvents}
          key="current"
          event={current}
          title={now.format('dddd, h:mma')}
          free={`${name} is empty.`}
        />
        <NextEvent
          show={showEvents}
          key="next"
          event={next}
          title="Next:"
          free="(Nothing scheduled)"
        />
      </RoomContainer>
    )
  }

  refresh = () => {
    const timeMin = moment().startOf('day')
    const timeMax = timeMin.clone().add(2, 'days')
    const calendarId = this.props.room.id

    gapi.client.calendar.events
      .list({
        calendarId,
        timeMin: timeMin.toISOString(),
        timeMax: timeMax.toISOString(),
        showDeleted: false,
        singleEvents: true,
        orderBy: 'startTime'
      })
      .then(this.loaded)

    this.timer = setTimeout(this.refresh, 10000)
  }

  loaded = response => {
    const events = this.parseEvents(response)
    const now = moment()
    const current = events.find(
      event => event.start.isSameOrBefore(now) && event.end.isAfter(now)
    )
    const next = events.find(event => event.start.isAfter(now))
    this.setState({ loading: false, current, next, now })
  }

  parseEvents = response =>
    response.result.items.map(event => ({
      ...event,
      start: moment.tz(event.start.dateTime, 'Pacific/Auckland'),
      end: moment.tz(event.end.dateTime, 'Pacific/Auckland')
    }))
}
