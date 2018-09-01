# Solution to Ingenious test for candidates - Frontend application

This is the frontend implementation of the solution to the test. 

## Index
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Starting servers](#starting-servers)
* [Libraries and utilities used](#libraries-used)

## Prerequisites

* [node](https://nodejs.org/) & [npm](https://www.npmjs.com/#getting-started)

## Installation

```
$> git clone git@github.com:davidjgomez/frontend-test.git
$> cd frontend-test/frontend
$> npm run install-all
```
## Configuration

In order to use the Twitter button of each event, it is necessary to configure 4 environment variables to successfully authenticate when requested.

To create this values it is mandatory to go to Tiwtter's developer site and review the OAuth authentication section [OAuth Authentication](https://developer.twitter.com/en/docs/basics/authentication/overview/oauth) so you can generate the credentials to use with the app.

Twitter makes you create and App configuration inside your account in order to generate valid credentials.

Once you have the credentials, open the `.env` file of the `server` module and put the keys generated for the application:

* TWITTER_CONSUMER_KEY (API Key)
* TWITTER_CONSUMER_SECRET (API Secret)
* TWITTER_ACCESS_TOKEN_KEY (Access Key)
* TWITTER_ACCESS_TOKEN_SECRET (Access Secret)

## Starting servers

This solution is composed of two modules:

* Client: this module contains all the components of the frontend application and all the necessary to comunicate with the backend server.
* Server: this module contains especific third-party services. In this case, only the communication with Twitter was mandatory using this module.

To run the servers, open a terminal in the `frontend` folder and run `npm start`. The backend server of the frontend should open on `http://localhost:3001` and the frontend server should open on `http://localhost:8080`.

In order to orchestrate both servers, in the `package.json` file of the `client` module a proxy was defined with the backend server's address.

Don't forget to init the backend server in the `backend` folder (it should start on `http://localhost:3000`)

## Libraries and utilities used

These libraries were used in order to develop the frontend part:

* `React`: The main library for the frontend part
* `React Router`: To create the SPA routes
* `React Prime`: To use some advanced graphic components for the app, this also had some dependencies like `classnames` to work with styles, `react-transition-group` for the growl component animation and `primeicons` to use some component icons
* `Moment`: To transform dates into strings

For the backend part, the following libraries were used:

* `Express`: To create the backend server
* `Twitter`: A client to use Twitter's API
* `Dotenv`: To load the `.env` configuration variables
* `Nodemon`: To run the server and monitor any changes to automatically reset it

Finally, in the root of the project, was used `Concurrently` to start both servers at once.

In addition, a Cloudinary account was created to manage images of the events. 