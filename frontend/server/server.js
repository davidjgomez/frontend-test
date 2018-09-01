const dotenv = require('dotenv')
const express = require('express')
const bodyParser = require('body-parser')
const TwitterAPI = require('./api/TwitterAPI')

dotenv.config()
const port = process.env.PORT || 3001
const app = express()

app.use(bodyParser.json())

app.post('/twitter/postTweet', (req, res) => {
	TwitterAPI.postTweet(req.body.eventTweet)
  	.catch(error => res.status(500).send(error))
  	.then(result => res.send(result))
})

app.listen(port, () => console.log(`Backend server is up on port ${port}`))
