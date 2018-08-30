import React, { Component } from 'react'
 
// Highlighted event
export default class HighlightedEvent extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>{this.props.title}</li>
          <li>{this.props.location}</li>
          <li>{this.props.description}</li>
      	</ul>
      </div>
    )
  }
}
