import React, { Component } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Main from './main/Main'
import DetailContainer from './detail/DetailContainer'
import CreationContainer from './creation/CreationContainer'

import './App.css'
import 'primereact/resources/themes/nova-light/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

// Application start component
export default class App extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <div>
          <ul id="header" className="header">
            <li className="title">Events</li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Main}/>
            <Route path="/event/:id" component={DetailContainer}/>
            <Route path="/newEvent" component={CreationContainer}/> 
          </div>
        </div>
      </Router> 
    )
  }
}
