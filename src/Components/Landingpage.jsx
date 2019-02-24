import React, { Component } from 'react';
import profile from '../Assests/img/profile.png'

class Landing extends Component {
  render() {
    return (
      <div >

        <div className="banner-text">
          <img
            src={profile}
            alt="avatar"
            style={{ height: '200px' }}
          />

          <h1>Glen Sale</h1>
          <h3>Full Stack Web Developer</h3>

          <hr />

          <p>HTML/CSS | Bootstrap | JavaScript | React | Angular | NodeJS | C# | Firebase | MySQL | MAMP | API  </p>

        </div>
      </div>
    )
  }
}

export default Landing;