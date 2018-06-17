import React, { Component } from 'react'
import styled from 'styled-components'

import ROOMS from '../rooms'

const List = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  min-height: 100vh;
  background: #ffe600;
  padding: 2em;
`

const RoomLink = styled.button`
  appearance: none;
  border: 0;
  background: transparent;
  color: #121212;
  font-family: 'Gotham';
  font-weight: 800;
  font-size: 2em;
  padding: 1em;
  line-height: 1;
  text-align: left;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
  transform: translateX(${props => props.show ? 0 : '-100vw'});
  transition: transform .5s cubic-bezier(0.4, 0.0, 0.2, 1);

  &:nth-last-child(1) { transition-delay: 0; }
  &:nth-last-child(2) { transition-delay: .1s; }
  &:nth-last-child(3) { transition-delay: .2s; }
  &:nth-last-child(4) { transition-delay: .3s; }
  &:nth-last-child(5) { transition-delay: .4s; }
  &:nth-last-child(6) { transition-delay: .5s; }
`

export default class RoomList extends Component {
  render() {
    const { status } = this.props

    return (
      <List>
        {ROOMS.map(room => (
          <RoomLink
            key={room.id}
            room={room}
            show={status === 'entered'}
            onClick={() => this.props.onRoomClicked(room)}
          >
            {room.name}
          </RoomLink>
        ))}
      </List>
    )
  }
}
