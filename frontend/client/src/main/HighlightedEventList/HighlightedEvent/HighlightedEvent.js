import React, { Component } from 'react'
import './HighlightedEvent.css'
 
// Highlighted event
export default class HighlightedEvent extends Component { 
  eventCard(event) {
    return (
      <div className="p-g-12 highlightedEventCard">
        <div className="p-g-3 p-sm-1 eventImage">
            <img src={event.eventImage} alt="Event" />
        </div>
        <div className="p-g-9 p-sm-11">
          <div className="p-g">
            <div className="p-g-6 eventTitle">{event.title}</div>
            <div className="p-g-6 eventDate">{event.dates[0]}</div>
          </div>
          <div className="eventDescription">{`${event.description.substring(0, 50)}...`}</div>
          <div className="footer">{event.location}</div>
        </div>
      </div>
    )
  }

  render() {
    return this.eventCard(this.props.event)
  }
}
