import React, { Component } from 'react'
import DetailView from './DetailView'
import eventAPI from '../api/EventAPI'
 
// Detailed view of a event container
export default class DetailContainer extends Component {
	constructor(props) {
    super(props)
    this.state = { isLoading: true, event: null, error: null }
  }

  componentDidMount() {
    eventAPI.findEventById(this.props.match.params.id)
      .catch(error => this.setState({ isLoading: false, error })) 
      .then(({ event }) => this.setState({ isLoading: false, event, error: null }))
  }

  render() {
    return <DetailView { ...this.state } />
  }
}
