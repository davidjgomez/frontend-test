import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import EventListContainer from './EventList/EventListContainer'
import HighlightedEventListContainer from './HighlightedEventList/HighlightedEventListContainer'

// Main view, where all events are shown and also the highlighted ones 
class Main extends Component {
  render() {
    return (
      <div>
      	<EventListContainer />
      	<HighlightedEventListContainer />
      	<Link to="/newEvent">+</Link>
      </div>
    )
  }
}
 
export default Main
