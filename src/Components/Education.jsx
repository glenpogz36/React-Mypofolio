import React, { Component } from 'react';

class Education extends Component {
  render() {
    return (
      <div>


        <h3 style={{ marginTop: '0px' }}>{this.props.schoolName}  <p style={{ color: "gray" }}>({this.props.startYear} - {this.props.endYear})</p></h3>
        <h5 style={{color: 'orange'}}>•{this.props.schoolDescription}</h5>
      </div>


    )
  }
}

export default Education;
