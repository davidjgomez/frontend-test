import React, { Component } from 'react'
import HighlightedEvent from './HighlightedEvent/HighlightedEvent'
import { Loading, Error } from '../../common/Utils/Utils'
 
// List of highlighted events component
export default class HighlightedEventListView extends Component {
  renderEvents(events) {
    return (
      <div>
  	    {events.map(event => 
  	      <HighlightedEvent key={event.id} title={event.title} 
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
