import React, { Component } from 'react'
import { Calendar } from 'primereact/calendar'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import EventDatesTable from '../../common/EventDatesTable/EventDatesTable'
import moment from 'moment'

// Form to take the dates of the event
export default class EventDates extends Component {
  constructor(props) {
    super(props)
    this.state = { newDate: null }

    this.selectDate = this.selectDate.bind(this)
    this.addDate = this.addDate.bind(this)
  }

  selectDate(e) {
    this.setState({newDate: e.value})
  }

  addDate(e) {
    if(this.state.newDate) {
      const date = moment(this.state.newDate).format('MM/DD/YYYY hh:mm')
      this.props.onChange(date)
    }
  }
  
  render() {
    return (
      <Card className="eventDatesCard">
        <EventDatesTable dates={this.props.event.dates} />
        <div>
          <Calendar showTime={true} value={this.state.newDate}
            onChange={this.selectDate} />
          <Button icon="pi pi-calendar-plus"
              className="p-button-raised addDateButton"
              onClick={this.addDate} />
        </div>
      </Card>
    )
  }
}
