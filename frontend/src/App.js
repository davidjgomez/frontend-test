import React, { Component } from 'react'
import { Route, NavLink, BrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './main/Main'
import DetailContainer from './detail/DetailContainer'
import CreationContainer from './creation/CreationContainer'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Ingenious Events</h1>
          <ul className="header">
            <li><NavLink exact to="/">-</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Main}/>
            <Route path="/event/:id" component={DetailContainer}/>
            <Route path="/newEvent" component={CreationContainer}/> 
          </div>
        </div>
      </BrowserRouter> 
    )
  }
}
