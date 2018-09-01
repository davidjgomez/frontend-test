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

    this.selectImage = this.selectImage.bind(this)
    this.configureData = this.configureData.bind(this)
  }

  selectImage(e) {
    this.setState({ image: e.files ? e.files[0] : null })
  }

  configureData(e) {
    e.formData.append('upload_preset', 'eventsPreset')
    e.formData.append('tags', 'browser_upload')
    e.formData.append('file', this.state.image)
  }

  loadImage(e) {
    const image = document.getElementById('eventImage')
    const imageURL = JSON.parse(e.xhr.response).secure_url
    image.setAttribute('src', imageURL)
  }

  manageError(e) {
    console.log(e.xhr.responseText)
  }

  render() {
    return (
      <Card className="eventPictureCard">
        <div>
          <img id="eventImage" alt="" onLoad={this.props.onChange} />
          <FileUpload name="eventImageUpload" 
            url={process.env.REACT_APP_CLOUDINARY_SERVICE}
            chooseLabel="Select Image" accept="image/*" mode="basic"
            onSelect={this.selectImage} onBeforeUpload={this.configureData} 
            onUpload={this.loadImage} onError={this.manageError} />
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
