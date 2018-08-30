import React, { Component } from 'react'
 
// Event detailed information
export default class EventInfo extends Component {
  render() {
    return (
      <div>
        <div>{this.props.title}</div>
        <div>{this.props.location}</div>
        <div>{this.props.description}</div>
      </div>
    )
  }
}
