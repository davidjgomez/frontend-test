import React, { Component } from 'react'
import HighlightedEventListView from './HighlightedEventListView'
import eventAPI from '../../api/EventAPI'
import { sortEventsByMaxDate } from '../Utils.js'
 
// List of highlighted events container 
export default class HighlightedEventListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { isLoading: true, events: [], error: null }
  }

  componentDidMount() {
    eventAPI.findHighlightedEvents()
      .catch(error => this.setState({ isLoading: false, error })) 
      .then(({ events }) => {
        const sortedEvents = sortEventsByMaxDate(events)
        this.setState({ isLoading: false, events: sortedEvents, error: null })
      })
  }

  render() {
    return <HighlightedEventListView { ...this.state } />
  }
}
