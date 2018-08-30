import Twitter from 'twitter'

// Class to use the backend API to work with Twitter
export default class TwitterAPI { 
  constructor() {
    this.client = new Twitter({
      consumer_key: process.env.REACT_APP_TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.REACT_APP_TWITTER_CONSUMER_SECRET,
      access_token_key: process.env.REACT_APP_TWITTER_ACCESS_TOKEN_KEY,
      access_token_secret: process.env.REACT_APP_TWITTER_ACCESS_TOKEN_SECRET
    })
  }

  postTweet(tweet) {
    return this.client.post('statuses/update', {status: tweet})
  }
}
