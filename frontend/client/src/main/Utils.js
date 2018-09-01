//Sort events based on most recent date
const sortEventsByMaxDate = (events) => {
  return events
    .map(event => {
    	event.dates = event.dates.sort((a, b) => a < b ? 1 : -1)
    	return event
    })
    .sort((a, b) => a.dates[0] < b.dates[0] ? 1 : -1)
}

export { sortEventsByMaxDate }
