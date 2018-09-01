import React, { Component } from 'react'
import {ProgressSpinner} from 'primereact/progressspinner'
import {Message} from 'primereact/message'
 
// Generic view renderer based on state attributes
export default class ViewRenderer extends Component {
  render() {
    if (this.props.progressFlag) {
      return <ProgressSpinner />
    } else if (this.props.renderObject) {
      return this.props.renderFunction(this.props.renderObject)
    } else {
      return <Message severity="error" text={`Error: ${this.props.error} Please try again!`} />
    }    
  }
}
