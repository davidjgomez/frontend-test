import React, { Component } from 'react'
import Event from './Event/Event'
import { Loading, Error } from '../../common/Utils/Utils'
 
// Main list of events component
export default class EventListView extends Component {
  renderEvents(events) {
    return (
      <div>
        {events.map(event => 
          <Event key={event.id} id={event.id} title={event.title} 
            image={event.eventImage} location={event.location} />)}
      </div>
    )
  }

  render() {
    if (this.props.isLoading) {
      return <Loading />
    } else if (this.props.events) {
      return this.renderEvents(this.props.events)
    } else {
      return <Error error={this.props.error} />
    }    
  }
}
