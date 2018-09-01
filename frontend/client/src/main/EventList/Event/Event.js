import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TweetEventButtonContainer from './TweetEventButton/TweetEventButtonContainer'
import {Card} from 'primereact/card'
import {Button} from 'primereact/button'
import './Event.css'
 
// Main event
export default class Event extends Component {
  header = (event) => <h4>{event.dates[0]}</h4>
 
  footer(event) {
    return <span>
      <Link to={"/event/" + event.id} 
        key={event.id}>
        <Button label="View" 
          icon="pi pi-arrow-right" iconPos="right"
          className="p-button-rounded p-button-raised p-button-success" />
      </Link>
      <TweetEventButtonContainer event={event} />
    </span>
  }

  eventCard(event) {
    return (
      <Card
        title={event.title}  
        header={this.header(event)}
        footer={this.footer(event)}
        style={{ backgroundImage: `url(${event.eventImage})` }}
        className="eventCard">
          {event.location}
      </Card>
    )
  }

  render() {
    return this.eventCard(this.props.event)
  }
}
