/* global gapi */

import React, { Component } from 'react'

import SignInScreen from './sign_in_screen'

const API_KEY = 'AIzaSyCQywlLsUC0XJuy6YONhneb0hl1whnGv7w'
const CLIENT_ID =
  '792104988205-lgnqhdkbrlgs98qhrdguvhgbg3js2de3.apps.googleusercontent.com'

// Array of API discovery doc URLs for APIs used by the quickstart
const DISCOVERY_DOCS = [
  'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'
]

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly'

export default class Authentication extends Component {
  state = {
    signedIn: false
  }

  componentDidMount() {
    gapi.load('client:auth2', this.initialize)
  }

  render() {
    if (this.state.signedIn) {
      return React.cloneElement(this.props.children, { signOut: this.signOut })
    } else if (gapi.auth2) {
      return <SignInScreen onSignInClicked={this.signIn} />
    } else {
      return ''
    }
  }

  initialize = () => {
    gapi.client
      .init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
        hostedDomain: 'flickelectric.co.nz'
      })
      .then(() => {
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus)

        // Handle the initial sign-in state.
        this.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get())
      })
  }

  updateSigninStatus = signedIn => {
    this.setState({ signedIn })
  }

  signIn = () => gapi.auth2.getAuthInstance().signIn()

  signOut = () => gapi.auth2.getAuthInstance().signOut()
}
