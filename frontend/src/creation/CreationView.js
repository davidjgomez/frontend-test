import React, { Component } from 'react'
//import EventInfo from './EventInfo/EventInfo'
//import EventPicture from './EventPicture/EventPicture'
//import EventDatesTable from './EventDatesTable/EventDatesTable'
 
// Detailed view to create a new event
export default class CreationView extends Component {
  render() {
    return (
      <form>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" 
          onChange={this.props.onChange} 
          value={this.props.event.title} />

        <label htmlFor="description">Description</label>  
        <textarea name="description" 
          onChange={this.props.onChange} 
          value={this.props.event.description} />

        <label htmlFor="image">Image</label>
        <input type="text" name="image" 
          onChange={this.props.onChange} 
          value={this.props.event.eventImage} />

        <label htmlFor="location">Location</label>
        <input type="text" name="location"
          onChange={this.props.onChange} 
          value={this.props.event.location} />

        <input type="submit" value="Save" 
          onClick={this.props.onCreate} />
      </form>

     // <EventInfo />
     // <EventPicture />
     // <EventDatesTable />

    )
  }
}
