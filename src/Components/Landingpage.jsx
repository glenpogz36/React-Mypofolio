import React, { Component } from 'react';
import profile from '../Assests/img/profile.png'
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={profile}
              alt="avatar"
              style={{ height: '200px' }}
              
            />

            <div className="banner-text">
              <h1>Glen Sale</h1>
              <h3>Full Stack Web Developer</h3>


              <hr />

              <p>HTML/CSS | Bootstrap | JavaScript | React | Angular | NodeJS | C# | Firebase | MySQL | MAMP | API  </p>
              <div className="social-links">



              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
