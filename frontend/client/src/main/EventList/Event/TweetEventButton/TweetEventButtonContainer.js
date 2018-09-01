import React, { Component } from 'react'
import TwitterAPI from '../../../../api/TwitterAPI'
import TweetEventButtonView from './TweetEventButtonView'

// Container of a twitter button to post events
export default class TweetEventButtonContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { result: '', error: null }

    this.tweetEvent = this.tweetEvent.bind(this)
  }

  tweetEvent(showSuccess, showError) {
  	const tweet = `I'm going to ${this.props.event.title} @ ${this.props.event.dates[0]}`
  	
    new TwitterAPI().tweetEvent(tweet)
      .catch(error => {
        this.setState({ error })
        showError() 
      })
	    .then(result => {
        if(result[0].code) {
          this.setState({ error: result })
          showError()
        } else {
          this.setState({ result })
          showSuccess()
        }
      })
  }

  render() {
    return (
      <TweetEventButtonView onClick={this.tweetEvent} {...this.state} />
    )
  }
}
