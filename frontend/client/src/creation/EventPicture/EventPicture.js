import React, { Component } from 'react'
import { InputText } from 'primereact/inputtext'
import { Card } from 'primereact/card'
import { FileUpload } from 'primereact/fileupload'
import './EventPicture.css'

// Form to take the picture and location of the event
export default class EventPicture extends Component {
  constructor(props) {
    super(props)
    this.state = { image: null }

    this.onSelect = this.onSelect.bind(this)
    this.onBeforeUpload = this.onSelect.bind(this)
  }

  onSelect(e) {
    this.setState({ image: e.files ? e.files[0] : null })
  }

  onBeforeUpload(e) {
    e.formData.append('upload_preset', 'eventsPreset')
    e.formData.append('tags', 'browser_upload')
    e.formData.append('file', this.state.image)
    console.log(e.formData)
  }

  onError(e) {
    console.log(e.xhr.responseText)
  }

  render() {
    return (
      <Card className="eventPictureCard">
        <div>
          <img id="eventImage" />
          <FileUpload name="eventImageUpload" 
            url="https://api.cloudinary.com/v1_1/davidjgomez/upload" 
            chooseLabel="Select Image" accept="image/*"
            onSelect={this.onSelect} onBeforeUpload={this.onBeforeUpload} 
            onError={this.onError} />
        </div>
        <div>
          <InputText id="location" placeholder="Location"
            size="25" value={this.props.event.location} 
            onChange={this.props.onChange} />
        </div>
      </Card>
    )
  }
}
