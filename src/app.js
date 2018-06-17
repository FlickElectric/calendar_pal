import React, { Component } from 'react'
import { TransitionGroup } from 'react-transition-group'
import styled from 'styled-components'

import CloseButton from './components/close_button'
import Room from './components/room'
import RoomList from './components/room_list'
import Slide from './components/slide'

const AppContainer = styled.main`
  position: relative;
`

export default class App extends Component {
  state = {}

  render() {
    const { room } = this.state

    return (
      <AppContainer>
        <CloseButton
          canClose={!room}
          onClick={room ? this.onCloseRoom : this.props.signOut}
        />
        <TransitionGroup component={null}>
          {room ? (
            <Slide key="room" id={room.id} direction={'right'} appear={true}><Room room={room} /></Slide>
          ) : (
            <Slide key="list" id="list" appear={true}><RoomList onRoomClicked={this.onRoomClicked} /></Slide>
          )}
        </TransitionGroup>
      </AppContainer>
    )
  }

  onRoomClicked = room => this.setState({ room })

  onCloseRoom = room => this.setState({ room: false })
}
