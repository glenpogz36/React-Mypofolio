import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import profile from '../Assests/img/profile.png'

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src={profile}
                alt="avatar"
                style={{ height: '200px' }}
              />
            </div>

            <h2 style={{ paddingTop: '2em' }}>Glen Sale</h2>
            <h4 style={{ color: 'grey' }}>Junior Developer</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p>Objective : Currently working and  studying Computer Programming at Epicodus to obtain an entry level position and to have an opportunity for growth</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5>Address</h5>
            <p>23925 98th ave S Kent, WA 98031</p>
            <h5>Phone</h5>
            <p>(206) 910-6531</p>
            <h5>Email</h5>
            <p>glen_sale@yahoo.com</p>
            <h5>Github</h5>
            <a href="https://github.com/glenpogz36">https://github.com/glenpogz36</a>
            <h5>Linkedin</h5>
            <a href="https://www.linkedin.com/in/glen-sale/">https://www.linkedin.com/in/glen-sale/</a>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2010}
              endYear={2015}
              schoolName="Kent Meridian HighSchool"
              schoolDescription=""
            />

            <Education
              startYear={2018}
              endYear={2019}
              schoolName="Epicodus Epecenter"
              schoolDescription=""
            />
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} style={{ borderTop: '3px solid #e22947' }} />

            <h2>Experience</h2>

            <Experience
              startYear={2013}
              endYear={2014}
              jobName="Family Fun Center"
              jobDescription=""
            />

            <Experience
              startYear={2014}
              endYear={2015}
              jobName="Red Ribbon Tukwilla"
              jobDescription=""
            />
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h2>Skills</h2>
            <Skills
              skill="javascript"
            />
            <Skills
              skill="HTML/CSS"
            />
            <Skills
              skill="NodeJS"
            />
            <Skills
              skill="React"
            />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
