import React, { Component } from 'react'
import EventInfo from './EventInfo/EventInfo'
import EventDatesTable from './EventDatesTable/EventDatesTable'
import { Loading, Error } from '../common/Utils/Utils'
 
// Detailed view of an event, where all event's information is shown
export default class Detail extends Component {  
  renderEvent(event) {
    return (
      <div>
        <EventInfo title={event.title} 
          location={event.location} 
          description={event.description} />
        <img src={event.eventImage} alt={event.eventImage} />
        <EventDatesTable dates={event.dates} />
      </div>
    )
  }

  render() {
    if (this.props.isLoading) {
      return <Loading />
    } else if (this.props.event) {
      return this.renderEvent(this.props.event)
    } else {
      return <Error error={JSON.stringify(this.props.error)} />
    }    
  }
}
