import React, { Component } from 'react'
import CreationView from './CreationView'
import EventAPI from '../model/EventAPI'
 
// Creation of an event container
export default class CreationContainer extends Component {
  constructor() {
    super()
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
    this.createEvent = this.createEvent.bind(this)
  }
  
  updateEventState(e) {
    const field = e.target.name;
    const event = this.state.event;
    event[field] = e.target.value;
    return this.setState({ isCreating: false, event });
  }

  createEvent(e) {
    e.preventDefault()
   
    new EventAPI().createEvent(this.state.event)
      .catch(error => this.setState({ isCreating: false, error })) 
      .then(({ event }) => { 
        this.setState({ isCreating: true, event, error: null })
        this.props.history.push('/') 
      })
  }

  render() {
    return <CreationView event={this.state.event} 
      onChange={this.updateEventState} 
      onCreate={this.createEvent} />
  }
}
