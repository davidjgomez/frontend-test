import React, { Component } from 'react'
import Event from './Event/Event'
import ViewRenderer from '../../common/ViewRenderer'
import { DataView } from 'primereact/dataview'
 
// Main list of events component
export default class EventListView extends Component {
  constructor(props) {
    super(props)

    this.renderEvents = this.renderEvents.bind(this)
  }

  itemTemplate(event, layout) {
    return (
      <div className="p-g-6 p-lg-4 p-md-6 p-sm-12">
        <Event key={event.id} event={event} />
      </div>
    )
  }

  renderEvents(events) {
    return (
      <DataView value={events} 
        layout="grid" 
        itemTemplate={this.itemTemplate}>
      </DataView>
    )
  }

  render() {
    return (
      <ViewRenderer progressFlag={this.props.isLoading}
        renderFunction={this.renderEvents}
        renderObject={this.props.events}
        error={this.props.error} />
    )
  }
}
