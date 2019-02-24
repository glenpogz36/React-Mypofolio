import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';


class Resume extends Component {
  render() {
    return (
      <div>

        <p>My name is Glen Sale born and raised from the Philippines. I move here October 9, 2005 as English is my second language.</p>
        <p>Over the years I have learned <em>English through ESL and Ell</em> and was able to graduate from it</p>
        <p>I have join <u>robotics clubs</u> and <u>culinary classes</u> but computer was my main interest</p>
        <p>Currently a student epicodus to persue long term career</p>


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

        <Education
          startYear={2010}
          endYear={2014}
          schoolName="Kent Meridian Highschool"
          schoolDescription="Test"
        />

        <Experience
          startYear={1}
          endYear={2}
          jobName="exp"
          jobDescription="exp"
        />




      </div>
    )
  }
}

export default Resume;