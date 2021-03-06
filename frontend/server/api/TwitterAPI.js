const Twitter = require('twitter')

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

// Module to use the Twitter API
module.exports = { 
  postTweet: (tweet) => {
    return client.post('statuses/update', {status: tweet})
      .then(tweet => console.log(tweet))
      .catch(error => { throw error })
  }
}
