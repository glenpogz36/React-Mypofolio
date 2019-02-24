import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Skills from './Skills';


class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <p>My name is Glen Sale born and raised from the Philippines. I move here October 9, 2005 as English is my second language.</p>
                        <p>Over the years I have learned <em>English through ESL and Ell</em> and was able to graduate from it</p>
                        <p>I have join <u>robotics clubs</u> and <u>culinary classes</u> but computer was my main interest</p>
                        <p>Currently a student epicodus to persue long term career</p>
                    </Cell>
                    <Cell col={4}>

                        <h2>Skills</h2>
                        <Skills
                            skill="javascript"
                            progress={100}
                        />
                        <Skills
                            skill="HTML/CSS"
                            progress={80}
                        />
                        <Skills
                            skill="NodeJS"
                            progress={50}
                        />
                        <Skills
                            skill="React"
                            progress={25}
                        />


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;

