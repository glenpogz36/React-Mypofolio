


import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import logo from '../Assests/img/logo.png'

class About extends Component {
  render() {
    return (
      <div style={{ color: 'skyblue', height: '100%', width: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundImage: "url(" + logo + ")" }}>
        <Grid className="contact-grid">
          <Cell col={6}>
            <div>
              <p>My name is Glen Sale born and raised from the Philippines. I move here October 9, 2005 as English is my second language.</p>
              <p>Over the years I have learned <em>English through ESL and Ell</em> and was able to graduate from it</p>
              <p>I have join <u>robotics clubs</u> and <u>culinary classes</u> but computer was my main interest</p>
              <p>Currently a student epicodus to persue long term career</p></div>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          </Cell>
          <Cell col={6}>
            <h2>Hobbies</h2>
            <ul>
              <li>Playing Basketball</li>
              <li>Playing video games</li>
              <li>Cooking</li>
            </ul>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />


          </Cell>
          <Cell col={6}>
            <h2>Interest</h2>
            <ul>
              <li>Culinary</li>
              <li>Software/Frameworks</li>
              <li>Mechanical Engineering</li>
            </ul>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />


          </Cell>
          <Cell col={6}>
            <h2>Experience</h2>
            <ul>
              <li>Green Planet</li>
              <li>Warehouse</li>
              <li>Swissport</li>
            </ul>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;



