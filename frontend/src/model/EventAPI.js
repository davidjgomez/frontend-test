// Main function to fetch data, is also used to create, update or delete objects
function _fetchData(route = '', method = 'GET', event) {
  const params = event ? 
    { 
      method,  
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ event })
    } : 
    { 
      method 
    } 
  
  return fetch(process.env.REACT_APP_API_URL + route, params)
    .then(res => res.json())
}

// Class to use the backend API to work with events
export default class EventAPI {  
  findAllEvents() {
    return _fetchData('events')
  }

  findHighlightedEvents() {
    return _fetchData('events/featured')
  }

  findEventById(id) {
    return _fetchData('events/' + id)
  }

  createEvent(event) {
    return _fetchData('events', 'POST', event)
  }
}
