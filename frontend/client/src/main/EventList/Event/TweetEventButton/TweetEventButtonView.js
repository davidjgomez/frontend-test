import React, { Component } from 'react'
import { Button } from 'primereact/button'
import { Growl } from 'primereact/growl'
 
// View of the tweet event button
export default class TweetEventButtonView extends Component {
  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this)
  }

  showSuccess(growl, message) {
    growl.show({
      severity: 'success', 
      summary: 'Event tweeted', 
      detail: `Your event was successfully posted on Twitter: ${message}`
    })
  }

  showError(growl, message) {
    growl.show({
      severity: 'error', 
      summary: 'Unable to tweet your event!', 
      detail: `${message}`
    })
  }

  onClick() {
    this.props.onClick(
      () => this.showSuccess(this.growl, JSON.stringify(this.props.result)), 
      () => this.showError(this.growl, JSON.stringify(this.props.error))
    )
  }

  render() {
    return (
      <div>
        <Growl ref={(el) => this.growl = el}></Growl>

        <Button label="Tweet" 
          icon="pi pi-external-link"
          className="p-button-rounded p-button-raised"
          onClick={this.onClick} />
      </div>
    )
  }
}
