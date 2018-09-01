import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import EventListContainer from './EventList/EventListContainer'
import HighlightedEventListContainer from './HighlightedEventList/HighlightedEventListContainer'
import { Button } from 'primereact/button'
import './Main.css'

// Main view, where all events are shown and also the highlighted ones 
class Main extends Component {
  render() {
    return (
      <div className="p-g">
        <div className="p-g-8">
        	<EventListContainer />
        </div>
        <div className="p-g-4">
          <HighlightedEventListContainer />
          <div className="newEvent">
          	<Link to="/newEvent">
              <Button icon="pi pi-plus"
                className="p-button-raised p-button-danger newEventButton" />
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
 
export default Main
