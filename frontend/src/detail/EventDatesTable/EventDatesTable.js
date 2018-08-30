import React, { Component } from 'react'
 
// Event dates table
export default class EventDatesTable extends Component {
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              {this.props.dates.map((date, index) => <td key={index}>{date}</td>)}
            </tr>
          </tbody>
      	</table>
      </div>
    )
  }
}