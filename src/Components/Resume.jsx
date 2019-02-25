import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import profile from '../Assests/img/profile.png'
import { Progress } from 'reactstrap';



class Resume extends Component {
  render() {
    return (
      <body className="resume">
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src={profile}
                alt="avatar"
                style={{ height: '300px' }}
              />
            </div>

            <h1 style={{ paddingTop: 'em' }}>Glen Sale</h1>
            <h3 style={{ color: 'grey' }}>Junior Developer</h3>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p><h4>Objective</h4> Currently working and  studying Computer Programming at Epicodus to obtain an entry level position and to have an opportunity for growth</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5>Address</h5>
            <p>23925 98th ave S Kent, WA 98031</p>
            <h5>Phone</h5>
            <p>(206) 910-6531</p>
            <h5>Email</h5>
            <p>glen_sale@yahoo.com</p>
            <h5>Github</h5>
            <a href="https://github.com/glenpogz36" rel="noopener noreferrer" target="_blank">https://github.com/glenpogz36</a>
            <h5>Linkedin</h5>
            <a href="https://www.linkedin.com/in/glen-sale/" rel="noopener noreferrer" target="_blank">https://www.linkedin.com/in/glen-sale/</a>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2 style={{color: "green"}}>Education</h2>


            <Education
              startYear={2010}
              endYear={2015}
              schoolName="Kent Meridian HighSchool"
              schoolDescription="Basic Culinary -  Basic-Engineering "
              
            />

            <Education
              startYear={2018}
              endYear={2019}
              schoolName="Epicodus Epecenter"
              schoolDescription="40/hr per week of real world complex problem and morning standups"
              
            />
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} style={{ borderTop: '3px solid #e22947' }} />

            <h2 style={{color: "green"}}>Experience</h2>

            <Experience
              startYear={2013}
              endYear={2014}
              jobName="Family Fun Center"
              jobDescription="Runner (Cook, Host, Operator, Trainer, Etc..)"
            />

            <Experience
              startYear={2014}
              endYear={2015}
              jobName="Red Ribbon Tukwilla"
              jobDescription="Cashier, Cook , Storage Man & Trainer
              "
            />
               <Experience
              startYear={2015}
              endYear={2016}
              jobName="Green Planet"
              jobDescription="Buisness, Marketing, Retailer, Co-Owner" 
            />

            <Experience
              startYear={2016}
              endYear={'CURRENT'}
              jobName="Swissport(Asiana)"
              jobDescription="Dispatcher (Ramp Agent, Pax Service, Trainer, Etc…)
              " 
            />

            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h2 style={{color: "green"}}>Skills</h2>
            <Skills
              skill="HTML/CSS"
            />
              <Progress bar value="100">100%</Progress>

            <Skills
              skill="C#"
            />
            <Progress bar color="success" value="60">60%</Progress>
            <Skills
              skill="JS"
              progress={70}
            />
               <Progress bar color="info" value="70">70%</Progress>
            <Skills
              skill="Angular"
              progress={80}
            />
                 <Progress bar color="warning" value="80">80%</Progress>
            <Skills
              skill="React"
              progress={50}
            />
            <Progress bar color="danger" value="50">50%</Progress>
            <br/>
            <h2>Progress</h2>
            <Progress multi>
              <Progress bar value="100">HTML/CSS</Progress>
              <Progress bar color="success" value="60">C#</Progress>
              <Progress bar color="info" value="70">JS</Progress>
              <Progress bar color="warning" value="80">Angular</Progress>
              <Progress bar color="danger" value="50">React</Progress>
            </Progress>



          </Cell>
        </Grid>
      </body>
    )
  }
}

export default Resume;
