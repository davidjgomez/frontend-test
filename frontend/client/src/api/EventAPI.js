// Main function to fetch data, is also used to create, update or delete objects
function _fetchData(route = '', method = 'GET', event) {
  const params = event ? 
    { 
      method,  
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ event })
    } : 
    { 
      method 
    } 
  
  return fetch(process.env.REACT_APP_API_URL + route, params)
    .then(res => res.json())
}

// Object to use the backend API to work with events
const eventAPI = {  
  findAllEvents: () => _fetchData('events'),

  findHighlightedEvents: () => _fetchData('events/featured'),

  findEventById: (id) => _fetchData('events/' + id),

  createEvent: (event) =>  _fetchData('events', 'POST', event)
}

export default eventAPI
