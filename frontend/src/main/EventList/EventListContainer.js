import React, { Component } from 'react'
import EventListView from './EventListView'
import EventAPI from '../../model/EventAPI'
 
// Main list of events container 
export default class EventListContainer extends Component {
  constructor() {
    super()
    this.state = { isLoading: true, events: [], error: null }
  }

  componentDidMount() {
    new EventAPI().findAllEvents()
      .catch(error => this.setState({ isLoading: false, error })) 
      .then(({ events }) => this.setState({ isLoading: false, events, error: null }))
  }

  render() {
    return <EventListView { ...this.state } />
  }
}
