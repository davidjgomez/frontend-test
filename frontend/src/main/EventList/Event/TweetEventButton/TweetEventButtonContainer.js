import React, { Component } from 'react'
import TwitterAPI from '../../../../model/TwitterAPI'

// Container of a twitter button to post events
export default class TweetEventButtonContainer extends Component {
  constructor() {
    super()
    this.state = { isTweeting: true, tweet: '', error: null }
  }

  tweetEvent() {
  	const eventTweet = "I'm going to {this.props.event.title} @ {this.props.event.date}";
  	new TwitterAPI().postTweet(eventTweet)
  	 .catch(error => this.setState({ isTweeting: false, error }))
	   .then(tweet => this.setState({ isTweeting: false, tweet, error: null }))
  }

  render() {
    return <button onClick={this.tweetEvent}>
      {this.state.isTweeting ? 'Tweeting event...' : 'Tweet this event'}
    </button>
  }
}