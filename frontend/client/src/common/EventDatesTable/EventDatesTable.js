import React, { Component } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

// Event dates table
export default class EventDatesTable extends Component {  
  dates = (dates) => dates
    .sort((a, b) => a < b ? 1 : -1)
    .map(date => {
      if(date) {
        const dateParts = date.split(' ') 
        return { date: dateParts[0], time: dateParts[1] }
      } else {
        return null
      }
  })

  render() {
    return (
      <DataTable value={this.dates(this.props.dates)}>
        <Column field="date" header="Date" />
        <Column field="time" header="Time" />
      </DataTable>
    )
  }
}
