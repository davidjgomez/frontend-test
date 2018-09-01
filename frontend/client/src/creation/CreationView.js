import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import ViewRenderer from '../common/ViewRenderer'
import EventInfo from './EventInfo/EventInfo'
import EventPicture from './EventPicture/EventPicture'
import EventDates from './EventDates/EventDates'
import { Button } from 'primereact/button'
import './CreationView.css'
 
// Detailed view to create a new event
export default class CreationView extends Component {
  constructor(props) {
    super(props);
    
    this.renderEvent = this.renderEvent.bind(this)
  }

  renderEvent(event) {
    return (
      <div className="p-g">
        <NavLink exact to="/" className="p-g-12">
          <Button icon="pi pi-arrow-left"
            className="p-button-raised" />
        </NavLink>
        <div className="p-g">
          <div className="p-g-8 p-sm-12">
            <EventInfo event={event} onChange={this.props.onChange} />
            <div className="createEvent">
              <Button icon="pi pi-save"
                className="p-button-raised p-button-danger createEventButton"
                onClick={this.props.onCreate} />
            </div>
          </div>
          <div className="p-g-4 p-sm-12">
            <EventPicture event={event} onChange={this.props.onChange} />
            <EventDates event={event} onChange={this.props.onChangeDates} />
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <ViewRenderer progressFlag={this.props.isCreating}
        renderFunction={this.renderEvent}
        renderObject={this.props.event}
        error={this.props.error} />
    )
  }
}
