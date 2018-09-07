// Main function to fetch data, is also used to create, update or delete objects
function _fetchData(route = '', method = 'GET', tweet) {
  const params = tweet ? 
    { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify({ tweet })
    } : 
    { 
      method 
    } 
  
  return fetch(route,params)
      .then(res => res.json())
}

// Object to use the twitter API to work with events
const twitterAPI = {  
  tweetEvent: (tweet) => _fetchData('/twitter/postTweet', 'POST', tweet)
}

export default twitterAPI
