import React, { Component } from 'react'
import HighlightedEventListView from './HighlightedEventListView'
import EventAPI from '../../model/EventAPI'
 
// List of highlighted events container 
export default class HighlightedEventListContainer extends Component {
  constructor() {
    super()
    this.state = { isLoading: true, events: [], error: null }
  }

  componentDidMount() {
    new EventAPI().findHighlightedEvents()
      .catch(error => this.setState({ isLoading: false, error })) 
      .then(({ events }) => this.setState({ isLoading: false, events, error: null }))
  }

  render() {
    return <HighlightedEventListView { ...this.state } />
  }
}
