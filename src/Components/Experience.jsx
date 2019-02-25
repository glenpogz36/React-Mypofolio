import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {
    return (
      <div>


        <h4 style={{ marginTop: '0px' }}>{this.props.jobName} <p style={{color: 'gray'}}>{this.props.startYear} - {this.props.endYear}</p></h4>
        <h5 style={{color: 'orange'}}>•{this.props.jobDescription}</h5>
      </div>


    )
  }
}

export default Experience;