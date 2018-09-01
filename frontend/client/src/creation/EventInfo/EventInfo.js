import React, { Component } from 'react'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { Card } from 'primereact/card'
import './EventInfo.css'

// Form to take the main information of the event
export default class EventInfo extends Component {
  render() {
    return (
      <Card className="eventInfoCard">
        <div>
          <InputText id="title" placeholder="Title" size="40"
            value={this.props.event.title} 
            onChange={this.props.onChange} />  
        </div>
        <div>
          <InputTextarea id="description" placeholder="Description" 
            autoResize={true} rows={10} cols={40} 
            value={this.props.event.description} 
            onChange={this.props.onChange} />
        </div>
      </Card>
    )
  }
}
