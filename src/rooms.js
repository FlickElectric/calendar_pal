const calendarId = id =>
  `flickelectric.co.nz_${id}@resource.calendar.google.com`

const ROOMS = [
  {
    name: 'Campaign',
    id: calendarId('3234313833333030')
  },
  {
    name: 'Caffeine',
    id: calendarId('3234323733333639333333')
  },
  {
    name: 'Champagne',
    id: calendarId('3938323532353637353830')
  },
  {
    name: 'The Small Meeting Space',
    id: calendarId('3136353738363238393837')
  }
]

export default ROOMS
