# Calendar Pal

Shows the status of the various meeting areas at Flick HQ, according to
Google Calendar bookings. Polls the calendar every 10 seconds or so
and displays the current booking (if any), and the next booking (up to
midnight tomorrow).

## Install

```
git clone git@github.com:FlickElectric/calendar_pal.git
yarn
yarn start
```

## Deploy

Deploys to Github pages using `react-gh-pages`:

```
yarn run deploy
```

The app is visible at
[https://flickelectric.github.io/calendar_pal/](https://flickelectric.github.io/calendar_pal/).

Note that the deploy location depends on the location of the `origin` git
remote. You may need to fiddle with your GitHub repo's GitHub Pages settings if
you fork this project.

## Configuration

Requires an API key and client ID, configured in
`src/components/authentication.js`. Get a new one if needed by
setting up a project in the
[Google Developer Console](https://console.developers.google.com/).

The list of rooms and their names is specified in `src/rooms.js`. The ID
is the Google Calendar ID for the meeting room, which you can get by viewing
the room's settings in Google Calendar.

## Authentication

Requires a `@flickelectric.co.nz` email address for sign-in: this is
configured by the `hostedDomain` parameter in
`src/components/authentication.js`.
