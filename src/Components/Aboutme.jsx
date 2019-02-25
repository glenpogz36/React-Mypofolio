import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profile from '../Assests/img/profile.png'
import flag from '../Assests/img/flag.png'
import basketball from '../Assests/img/basketball.png'
import epicodus from '../Assests/img/epicodus.png'
import engineer from '../Assests/img/engineer.png'




class About extends Component {
  render() {
    return (
      <body className='about'>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src={profile}
                alt="avatar"
                style={{ height: '300px' }}
              />
            </div>

            <p style={{ paddingTop: 'em' }}>My name is Glen Sale born and raised from the Philippines. I move here October 9, 2005 as English is my second language. Over the years I have learned <em>English through ESL and Ell</em> and was able to graduate from it. I have join <u>robotics clubs</u> and <u>culinary classes</u> but computer was my main interest</p>

            <p>Currently a student epicodus to persue long term career</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5>Interest</h5>
            <ul>
              <li>Culinary</li>
              <li>Software/Frameworks</li>
              <li>Mechanical Engineering</li>
            </ul>

            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5>Hobbies</h5>
            <ul>
              <li>Playing Basketball</li>
              <li>Playing video games</li>
              <li>Cooking</li>
            </ul>

            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5>Experience</h5>
            <ul>
              <li>Green Planet</li>
              <li>Warehouse</li>
              <li>Swissport</li>
            </ul>

          </Cell>
          <Cell className="resume-right-col" row={8} col={8}>


            <div className="row">
              <div className="column">
                <img style={{ height: '100%', width: '100%' }} src={flag} alt="flag" />
              </div>

              <div className="column">
                <img style={{ height: '100%', width: '100%' }} src={basketball} alt="flag" />
              </div>

              <div className="column">
                <img style={{ height: '100%', width: '100%' }} src={epicodus} alt="flag" />
              </div>
              <div className="column">
                <img style={{ height: '100%', width: '100%' }} src={engineer} alt="flag" />
              </div>
            </div>



          </Cell>
        </Grid>
      </body>
    )
  }
}

export default About;
