import React, { Component } from 'react'
import HighlightedEvent from './HighlightedEvent/HighlightedEvent'
import ViewRenderer from '../../common/ViewRenderer'
import { DataView } from 'primereact/dataview'
 
// List of highlighted events component
export default class HighlightedEventListView extends Component {
  constructor(props) {
    super(props);

    this.renderEvents = this.renderEvents.bind(this)
  }

  header = <h2>Highlights</h2>

  itemTemplate(event, layout) {
    return (
      <HighlightedEvent key={event.id} event={event} />
    )
  }

  renderEvents(events) {
    return (
      <DataView value={events}
        header={this.header} 
        layout="list" 
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
