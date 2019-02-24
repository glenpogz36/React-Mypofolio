import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
    render() {
        return (
          
                    <div>{this.props.skill} <ProgressBar progress={this.props.progress} /> </div>
           
        )
    }
}

export default Skills;
