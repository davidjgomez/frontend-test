import React, { Component } from 'react'
import EventListView from './EventListView'
import EventAPI from '../../api/EventAPI'
import { sortEventsByMaxDate } from '../Utils.js'
 
// Main list of events container 
export default class EventListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { isLoading: true, events: [], error: null }
  }

  componentDidMount() {
    new EventAPI().findAllEvents()
      .catch(error => this.setState({ isLoading: false, error })) 
      .then(({ events }) => {
        const sortedEvents = sortEventsByMaxDate(events)
        this.setState({ isLoading: false, events: sortedEvents, error: null })
      })
  }

  render() {
    return <EventListView { ...this.state } />
  }
}
