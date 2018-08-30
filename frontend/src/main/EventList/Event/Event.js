import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TweetEventButtonContainer from './TweetEventButton/TweetEventButtonContainer'
 
// Main event
export default class Event extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>{this.props.id}</li>
          <li>{this.props.title}</li>
          <li>{this.props.location}</li>
          <TweetEventButtonContainer />
      	</ul>
        <Link to={"/event/" + this.props.id} key={this.props.id}>View</Link>
      </div>
    )
  }
}
