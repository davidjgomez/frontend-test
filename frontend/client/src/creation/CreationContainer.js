import React, { Component } from 'react'
import CreationView from './CreationView'
import eventAPI from '../api/EventAPI'
 
// Creation of an event container
export default class CreationContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      isCreating: false, 
      event: {
        title: '',
        eventImage: '',
        description: '',
        dates: [],
        location: ''
      }, 
      error: null 
    }
    
    this.updateEventState = this.updateEventState.bind(this)
    this.updateEventDates = this.updateEventDates.bind(this)
    this.createEvent = this.createEvent.bind(this)
  }
  
  updateEventState(e) {
    const field = e.target.id;
    const event = this.state.event;
    event[field] = e.target.value ? e.target.value : e.target.src;
    this.setState({ isCreating: false })
  }

  updateEventDates(date) {
    this.state.event.dates.push(date)
    this.setState({ isCreating: false })
  }

  createEvent(e) {
    e.preventDefault()
   
    eventAPI.createEvent(this.state.event)
      .catch(error => this.setState({ isCreating: false, error })) 
      .then(({ event }) => { 
        this.setState({ isCreating: true, event, error: null })
        this.props.history.push('/') 
      })
  }

  render() {
    return <CreationView isCreating={this.state.isCreating} 
      event={this.state.event}
      error={this.state.error}
      onChange={this.updateEventState} 
      onChangeDates={this.updateEventDates}
      onCreate={this.createEvent} />
  }
}
