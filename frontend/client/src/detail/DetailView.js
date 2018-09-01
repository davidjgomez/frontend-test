import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import EventDatesTable from '../common/EventDatesTable/EventDatesTable'
import ViewRenderer from '../common/ViewRenderer'
import { Panel } from 'primereact/panel'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import './DetailView.css'
 
// Detailed view of an event, where all event's information is shown
export default class Detail extends Component {  
  constructor(props) {
    super(props);

    this.renderEvent = this.renderEvent.bind(this)
  }  

  header(event) {
    return <div>
      <h2>{event.title}</h2>
      <h3>{event.location}</h3>
    </div>
  }

  renderEvent(event) {
    return (
      <div className="p-g">
        <NavLink exact to="/" className="p-g-12">
          <Button icon="pi pi-arrow-left"
            className="p-button-raised" />
        </NavLink>
        <div className="p-g">
          <div className="p-g-8 detailCard">
            <Card>
              <Panel header={this.header(event)}>
                {event.description}
              </Panel>
            </Card>
          </div>
          <div className="p-g-4 detailCard">
            <Card>
              <img src={event.eventImage} alt={event.eventImage} />
            </Card>
            <Card>
              <EventDatesTable dates={event.dates} />
            </Card>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <ViewRenderer progressFlag={this.props.isLoading}
        renderFunction={this.renderEvent}
        renderObject={this.props.event}
        error={this.props.error} />
    )
  }
}
